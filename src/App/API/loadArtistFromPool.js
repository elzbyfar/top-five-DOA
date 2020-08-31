import url from '../Helpers/url';

const loadArtistFromPool = async (id) => {
	const result = await fetch(url.loadArtist(id), {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});

	const data = await result.json();

	const artistAdapter = {
		about: data.about,
		name: data.name,
		genres: data.genres,
		thumbnail: data.thumbnail,
		largeImage: data.large_image,
		spotifyFollowers: data.spotify_followers,
		spotifyPopularity: data.popularity,
		origin: data.origin,
		hometown: data.home_town,
		birthPlace: data.birth_place,
		netWorth: data.net_worth,
		birthYear: data.birth_year,
		deathYear: data.death_year,
		isGroup: data.is_group,
		yearsActive: data.years_active,
		threads: [],
		top5Songs: data.top_songs.map((song, i) => {
			return {
				id: i,
				name: song
			};
		})
	};

	return artistAdapter;
};

export default loadArtistFromPool;
