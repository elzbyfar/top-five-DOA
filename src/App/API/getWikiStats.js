import url from '../Helpers/url';
import parseInfo from 'infobox-parser';

const getWikiStats = async (name) => {
	const result = await fetch(url.getWikiStats(name), {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});

	const data = await result.json();
	let fullWikiArticle = data.query.pages[Object.keys(data.query.pages)[0]];

	if (fullWikiArticle.missing === '' || fullWikiArticle.invalid === '') {
		return null;
	}
	fullWikiArticle = data.query.pages[Object.keys(data.query.pages)[0]].revisions[0]['*'];
	const wikiStats = parseInfo(fullWikiArticle);

	return wikiStats.general;
};

export default getWikiStats;
