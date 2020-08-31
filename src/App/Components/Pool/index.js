import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import populatePool from '../../API/getThumbnails';
import loadArtistFromPool from '../../API/loadArtistFromPool';
import './styles.css';

const Index = (props) => {
	const [ thumbnails, setThumbnails ] = useState([]);
	const [ openArtistMenu, setOpenArtistMenu ] = useState(false);
	const [ artistInMenu, setArtistInMenu ] = useState({});

	useEffect(() => {
		populatePool([], setThumbnails);
	}, []);

	const selectionHandler = async (artist) => {
		props.setArtistObject(artist);
	};

	const getArtistForMenu = async (id) => {
		const artist = await loadArtistFromPool(id);
		setOpenArtistMenu(true);
		setArtistInMenu(artist);
	};

	return (
		<div className="pool">
			{thumbnails.map((artist) => {
				return (
					<div
						onClick={() => getArtistForMenu(artist.id)}
						className="thumbnail-container"
						key={artist.id}
						style={{
							background: `url(${artist.thumbnail})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundColor: '#000'
						}}
					>
						<span className="display-artist-name">{artist.name}</span>
					</div>
				);
			})}
			<div
				onClick={() => setOpenArtistMenu(false)}
				className={openArtistMenu ? 'artist-menu-modal' : 'hide-artist-menu-modal'}
			>
				<span className="close-menu-modal-button">×</span>
				<span className="artist-menu-name">{artistInMenu.name}</span>
				<div className="artist-menu-photo-frame">
					<img className="artist-menu-photo" src={artistInMenu.largeImage} />
				</div>
				<button>
					Add <strong>{artistInMenu.name}</strong> To <strong>Top5 {props.thread}</strong>
				</button>
				<Link to={`/artist/${artistInMenu.id}`} onClick={() => selectionHandler(artistInMenu)}>
					<button>
						View <strong>{artistInMenu.name}</strong>'s Full Profile
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Index;
