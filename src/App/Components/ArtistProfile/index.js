import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import ArtistProfileInfo from '../ArtistProfileInfo';
import './styles.css';

const ArtistProfile = (props) => {
	return (
		<div className="artist-profile-container">
			<Link to="/pool" className="back-button">
				<i className="fa fa-arrow-left" />
			</Link>
			<img className="artist-image" src={props.artistObject.largeImage} alt={props.artistObject.name} />
			<div className="overlay-container">
				<SearchBar
					artistName={props.artistName}
					setArtistName={props.setArtistName}
					setArtistObject={props.setArtistObject}
					searchBar={props.searchBar}
					showSearchBar={props.showSearchBar}
					keys={props.keys}
				/>
				<ArtistProfileInfo artistObject={props.artistObject} />
			</div>
		</div>
	);
};

export default ArtistProfile;
