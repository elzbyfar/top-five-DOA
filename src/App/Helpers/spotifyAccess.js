const spotifyAccess = {
	_token: '',
	set save(token) {
		this._token = token;
	},
	get token() {
		return this._token;
	},
	get clientId() {
		return this._clientId;
	},
	get clientSecret() {
		return this._clientSecret;
	}
};

export default spotifyAccess;
