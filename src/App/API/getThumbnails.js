import url from '../Helpers/url';

const getThumbnails = async (thread, setThumbnails) => {
	const result = await fetch(url.getThumbnails(), {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
			Accept: 'application/json'
		}
	});

	const data = await result.json();
	const thumbnailLinks = data.sort((a, b) => (a.popularity > b.popularity ? -1 : 1)).map((artist) => {
		const poolArtist = {
			thumbnail: artist.thumbnail,
			name: artist.name,
			id: artist.id
		};
		return poolArtist;
	});

	setThumbnails(thumbnailLinks);
};

export default getThumbnails;
