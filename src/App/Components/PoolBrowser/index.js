import React from 'react';
import Pool from '../Pool';
import './styles.css';
import '../Navbar/styles.css';
// import SearchBar from '../ArtistProfile/SearchBar';

const PoolBrowser = (props) => {
	const toggle = () => props.setDropdownOpen((prevState) => !prevState);
	const selectHandler = (thread) => {
		props.setThread(thread);
		toggle();
	};

	return (
		<div className="pool-container">
			<div className="pool-header">
				<div className={props.dropdownOpen ? 'dropdown-open' : 'dropdown-closed'}>
					<button className="selected-thread" onClick={toggle}>
						{props.thread}
						<i className="fa fa-lg fa-angle-down dropdown-arrow" />
					</button>
					<button className="thread-option" onClick={() => selectHandler('Rappers of All Time')}>
						Rappers of All Time
					</button>
					<button className="thread-option" onClick={() => selectHandler('Rap Groups of All Time')}>
						Rap Groups of All Time
					</button>
					<span className="sub-category">DECADES</span>
					<button className="thread-option" onClick={() => selectHandler('Rappers of the 80s')}>
						Rappers of the 80's
					</button>
					<button className="thread-option" onClick={() => selectHandler('Rappers of the 90s')}>
						Rappers of the 90's
					</button>
					<button className="thread-option" onClick={() => selectHandler('Rappers of the 00s')}>
						Rappers of the 00's
					</button>
					<button className="thread-option" onClick={() => selectHandler('Rappers of the 10s')}>
						Rappers of the 10's
					</button>
				</div>
				{/* <SearchBar
					artistName={props.artistName}
					setArtistName={props.setArtistName}
					artistObject={props.artistObject}
					setArtistObject={props.setArtistObject}
				/> */}
				<div className="user-top-5">
					<div className="ranked-artist">1</div>
					<div className="ranked-artist">2</div>
					<div className="ranked-artist">3</div>
					<div className="ranked-artist">4</div>
					<div className="ranked-artist">5</div>
				</div>
			</div>
			<Pool setArtistObject={props.setArtistObject} thread={props.thread} />
		</div>
	);
};

export default PoolBrowser;
