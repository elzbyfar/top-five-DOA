import getWikiAbout from '../API/getWikiAbout';
import getWikiStats from '../API/getWikiStats';
import getSpotifyToken from '../API/getSpotifyToken';
import getArtistOnSpotify from '../API/getArtistOnSpotify';
import get10SongsOnSpotify from '../API/get10SongsOnSpotify';
import updateOrCreateArtist from '../API/updateOrCreateArtist';

const buildArtistProfile = async (name, keys) => {
	// ***************** HELPER METHODS ***************** //

	const hasLocation = (stat) => {
		return typeof stat === 'object' ? stat.join(', ') : stat;
	};

	const hasDate = (stat) => {
		return typeof stat === 'object' ? (stat[0] ? stat.join(', ') : stat.date.getFullYear()) : stat;
	};

	const hasNetWorth = (stat) => {
		return typeof stat === 'string' ? stat.split(' (')[0].replace('US', 'USD ') : stat;
	};

	const hasKeywords = (response) => {
		return !response.includes('music') && !response.includes('rapper') && !response.includes('singer');
	};

	const foundStats = (stats) => {
		return !stats || Object.keys(stats).length === 0;
	};

	const isMusician = (response) => {
		return (
			!response ||
			Object.keys(response).length === 0 ||
			response.includes('may refer to') ||
			hasKeywords(response)
		);
	};

	// ***************** API CALLS ***************** //

	// request Spotify token
	const token = await getSpotifyToken(keys);

	// get individual artist from Spotify
	const artist = await getArtistOnSpotify(token, name);

	// get top 10 songs from Spotify
	const top10Songs = await get10SongsOnSpotify(token, artist.id, 'US');

	// get additional Wikipedia information
	let wikiStats = await getWikiStats(artist.name);
	console.log('stats', wikiStats);
	if (foundStats(wikiStats)) {
		wikiStats = await getWikiStats(`${artist.name}_(musician)`);
		console.log('outside', wikiStats);
		console.log('musician stats', wikiStats);
		if (foundStats(wikiStats)) {
			wikiStats = await getWikiStats(`${artist.name}_(rapper)`);
			console.log('outside', wikiStats);
			console.log('rapper stats', wikiStats);
		}
		if (foundStats(wikiStats)) {
			wikiStats = await getWikiStats(`${artist.name}_(singer)`);
			console.log('singer stats', wikiStats);
		}
		if (foundStats(wikiStats)) {
			wikiStats = await getWikiStats(`${artist.name}_(singer)`);
			console.log('singer stats', wikiStats);
		}
	}

	// get Wikipedia 'about' section
	let wikiAbout = await getWikiAbout(artist.name);
	if (isMusician(wikiAbout)) {
		wikiAbout = await getWikiAbout(`${artist.name.toLowerCase()}_(musician)`);
		if (!wikiAbout || hasKeywords(wikiAbout)) {
			wikiAbout = await getWikiAbout(`${artist.name.toLowerCase()}_(rapper)`);
		}
		if (!wikiAbout || hasKeywords(wikiAbout)) {
			wikiAbout = await getWikiAbout(`${artist.name.toLowerCase()}_(singer)`);
		}
	}

	// ***************** ASSEMBLE ARTIST OBJECT ***************** //

	const assembledArtist = {
		about: wikiAbout,
		name: artist.name,
		genres: artist.genres,
		thumbnail: artist.thumbnail,
		largeImage: artist.largeImage,
		spotifyFollowers: artist.followers,
		spotifyPopularity: parseInt(artist.popularity),
		origin: hasLocation(wikiStats.origin),
		hometown: hasLocation(wikiStats.homeTown),
		birthPlace: hasLocation(wikiStats.birthPlace),
		birthYear: hasDate(wikiStats.birthDate),
		deathYear: hasDate(wikiStats.deathDate),
		yearsActive: `${parseInt(hasDate(wikiStats.yearsActive))}-present`,
		netWorth: hasNetWorth(wikiStats.netWorth),
		isGroup: wikiStats.background !== 'solo_singer',
		top5Songs: top10Songs.tracks.splice(0, 5)
	};

	// persist artist to Top5 API
	updateOrCreateArtist(assembledArtist);

	return assembledArtist;
};

export default buildArtistProfile;
