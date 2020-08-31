import url from '../Helpers/url';

const updateOrCreateArtist = (artist) => {
	fetch(url.postArtist(), {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			accept: 'application/json'
		},
		body: JSON.stringify({
			about: artist.about,
			name: artist.name,
			genres: artist.genres,
			thumbnail: artist.thumbnail,
			large_image: artist.largeImage,
			spotify_followers: artist.spotifyFollowers,
			popularity: artist.spotifyPopularity,
			origin: artist.origin,
			hometown: artist.hometown,
			birth_place: artist.birthPlace,
			net_worth: artist.netWorth,
			birth_year: artist.birthYear,
			death_year: artist.deathYear,
			is_group: artist.isGroup,
			years_active: artist.yearsActive,
			threads: [],
			top_songs: artist.top5Songs.map((song) => song.name)
		})
	});
};

export default updateOrCreateArtist;
