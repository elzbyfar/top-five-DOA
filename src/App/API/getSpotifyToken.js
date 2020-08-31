import url from '../Helpers/url';
import access from '../Helpers/spotifyAccess';

const getSpotifyToken = async (keys) => {
	if (access.token === '') {
		const result = await fetch(url.getSpotifyToken(), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				// Authorization: 'Basic ' + btoa(access.clientId + ':' + access.clientSecret)
				Authorization: 'Basic ' + btoa(keys.id + ':' + keys.secret)
			},
			body: 'grant_type=client_credentials'
		});

		const data = await result.json();
		access.save = data.access_token;
	}
	return access.token;
};

export default getSpotifyToken;
