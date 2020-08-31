const url = {
	proxy: function() {
		return 'https://cors-anywhere.herokuapp.com/';
	},
	getSpotifyToken: function() {
		return 'https://accounts.spotify.com/api/token';
	},
	getArtistOnSpotify: function(name) {
		return `https://api.spotify.com/v1/search?q=${name}&type=artist&market=US&limit=1&offset=0`;
	},
	get10SongsOnSpotify: function(id, country) {
		return `https://api.spotify.com/v1/artists/${id}/top-tracks?country=${country}`;
	},
	getWikiStats: function(name) {
		return `https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&redirects=1&titles=${name}&rvsection=0`;
	},
	getWikiAbout: function(name) {
		return `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${name}`;
	},
	getThumbnails: function() {
		return 'http://localhost:3000/artists';
	},
	postArtist: function() {
		return 'http://localhost:3000/artists/';
	},
	loadArtist: function(id) {
		return `http://localhost:3000/artists/${id}`;
	}
};

export default url;
