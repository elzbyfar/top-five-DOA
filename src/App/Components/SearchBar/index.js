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
					value={props.artistName}
					onChange={(e) => props.setArtistName(e.target.value)}
				/>
				<i
					className="fa fa-search search-bar-icon"
					onClick={(event) => {
						event.preventDefault();
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
