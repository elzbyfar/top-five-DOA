import url from '../Helpers/url';

const getWikiAbout = async (name) => {
	const result = await fetch(url.proxy() + url.getWikiAbout(name), {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});

	const data = await result.json();
	const wikiAbout = data.query.pages[Object.keys(data.query.pages)[0]].extract;

	return wikiAbout;
};

export default getWikiAbout;
