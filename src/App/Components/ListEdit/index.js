import React, { useState } from 'react';
import DropdownMenu from '../DropdownMenu';
import ActiveTop5 from '../ActiveTop5';
import SearchBar from '../SearchBar';
import Pool from '../Pool';
import './styles.css';
import '../Navbar/styles.css';

const Index = (props) => {
	const [ activeList, updateActiveList ] = useState([]);

	return (
		<div className="list-edit-container">
			<div className="list-edit-header">
				<DropdownMenu
					dropdownOpen={props.dropdownOpen}
					setDropdownOpen={props.setDropdownOpen}
					thread={props.thread}
					setThread={props.setThread}
				/>
				<SearchBar
					artistName={props.artistName}
					setArtistName={props.setArtistName}
					artistObject={props.artistObject}
					setArtistObject={props.setArtistObject}
					searchBar={props.searchBar}
					showSearchBar={props.showSearchBar}
				/>
				<ActiveTop5
					activeList={activeList}
					updateActiveList={updateActiveList}
					setArtistObject={props.setArtistObject}
				/>
			</div>
			<Pool
				thread={props.thread}
				activeList={activeList}
				updateActiveList={updateActiveList}
				setArtistObject={props.setArtistObject}
			/>
		</div>
	);
};

export default Index;
