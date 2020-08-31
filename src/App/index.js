import React, { useState } from 'react';
import ArtistProfile from './Components/ArtistProfile';
import ListEdit from './Components/ListEdit';
import Navbar from './Components/Navbar';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

const _private_keys = {
	id: process.env.REACT_APP_CLIENT_ID,
	secret: process.env.REACT_APP_CLIENT_SECRET
};

function App() {
	// show or hide searchbar
	const [ searchBar, showSearchBar ] = useState(false);
	// set artist name from search bar
	const [ artistName, setArtistName ] = useState('');
	// set artist object after search or selection
	const [ artistObject, setArtistObject ] = useState({});
	// open or close dropdown menue
	const [ dropdownOpen, setDropdownOpen ] = useState(false);
	// select thread from dropdown
	const [ thread, setThread ] = useState('Rappers of All Time');

	return (
		<div onClick={() => dropdownOpen && setDropdownOpen(false)} className="App">
			<Navbar searchBar={searchBar} showSearchBar={showSearchBar} />
			<Router>
				<Switch>
					<Route
						path="/pool"
						render={() => (
							<ListEdit
								artistObject={artistObject}
								setArtistObject={setArtistObject}
								artistName={artistName}
								setArtistName={setArtistName}
								dropdownOpen={dropdownOpen}
								setDropdownOpen={setDropdownOpen}
								thread={thread}
								setThread={setThread}
								searchBar={searchBar}
								showSearchBar={showSearchBar}
							/>
						)}
					/>
					<Route
						path="/artist/:id"
						render={() => (
							<ArtistProfile
								artistObject={artistObject}
								setArtistObject={setArtistObject}
								artistName={artistName}
								setArtistName={setArtistName}
								searchBar={searchBar}
								showSearchBar={showSearchBar}
								keys={_private_keys}
							/>
						)}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
