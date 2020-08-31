import React from 'react';
import buildArtistProfile from '../../Helpers/buildArtistProfile';
import './styles.css';

const index = (props) => {
	const submitHandler = async () => {
		const artist = await buildArtistProfile(props.artistName, props.keys);
		props.setArtistObject(artist);
		props.setArtistName('');
	};

	return (
		<form className={props.searchBar ? 'show-search-bar' : 'hide-search-bar'}>
			<label>
				<input
					type="text"
					className="search-bar"
					style={{ width: props.searchBar ? '35vw' : '5vw', transition: 'all 0.3s ease-in-out' }}
					value={props.artistName}
					onChange={(e) => props.setArtistName(e.target.value)}
				/>
				<i
					className="fa fa-lg fa-search search-bar-icon"
					style={{ opacity: props.searchBar ? 1 : 0, transition: 'all 0.3s ease-in-out' }}
					onClick={(event) => {
						event.preventDefault();
						props.showSearchBar(false);
						submitHandler();
					}}
				/>
				<input
					type="submit"
					className="real-submit-button"
					onClick={(event) => {
						event.preventDefault();
						submitHandler();
					}}
				/>
			</label>
		</form>
	);
};

export default index;
