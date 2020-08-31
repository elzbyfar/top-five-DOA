import url from '../Helpers/url';
import formatFollowers from '../Helpers/formatFollowers';

const getArtistOnSpotify = async (token, name) => {
	const asyncToken = await token;

	const result = await fetch(url.getArtistOnSpotify(name), {
		method: 'GET',
		headers: { Authorization: 'Bearer ' + asyncToken }
	});

	const data = await result.json();
	const artist = data.artists.items[0];

	const spotifyArtist = {
		id: artist.id,
		name: artist.name,
		largeImage: artist.images[0].url,
		genres: artist.genres.join(' | '),
		thumbnail: artist.images.filter((image) => image.width <= 200)[0].url,
		followers: formatFollowers(artist.followers.total),
		popularity: artist.popularity
	};
	return spotifyArtist;
};

export default getArtistOnSpotify;
