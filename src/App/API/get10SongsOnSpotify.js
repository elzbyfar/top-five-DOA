import url from '../Helpers/url';

const get10SongsOnSpotify = async (token, id, country) => {
	const result = await fetch(url.get10SongsOnSpotify(id, country), {
		method: 'GET',
		headers: { Authorization: 'Bearer ' + token }
	});

	const data = await result.json();
	return data;
};

export default get10SongsOnSpotify;
