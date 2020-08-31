import React from 'react';
import './styles.css';

const index = (props) => {
	const artist = { ...props.artistObject };

	return (
		<div>
			<div className="artist-name-container">
				<h3 className="artist-name">
					{artist.name ? artist.name : 'artist name'}
					<button className="add-button">+</button>
				</h3>
			</div>
			<div className="info-scroll">
				<h5 className="top-songs-title sub-title">top tracks</h5>
				<ol className="song-list">
					{artist.top5Songs &&
						artist.top5Songs.map((song) => {
							return (
								<li className="song" key={song.id}>
									{song.name}
								</li>
							);
						})}
				</ol>
				<span className="sub-title">about</span>
				<span className="artist-bio value">{artist.about && artist.about}</span>
				<br />
				<div className="sub-stats">
					<div className="sub-stat">
						<span className="sub-title">active</span>
						<span className="years-active value">{artist.yearsActive}</span>
					</div>
					<div className="sub-stat">
						<span className="sub-title">origin</span>
						<span className="origin value">{artist.origin || artist.hometown || artist.birthPlace}</span>
					</div>
					<div className="sub-stat">
						<span className="sub-title">lifetime</span>
						<span className="lifetime value">{`${artist.birthYear}-${artist.deathYear || '20XX'}`}</span>
					</div>
				</div>
				<br />
				<span className="sub-title">spotify stats</span>
				<div className="sub-stats">
					<div className="sub-stat">
						<span className="sub-title">followers</span>
						<span className="spotify-followers value">{artist.spotifyFollowers}</span>
					</div>
					<div className="sub-stat">
						<span className="sub-title">popularity</span>
						<span className="popularity value">{artist.spotifyPopularity}</span>
					</div>
				</div>
				<br />
				<span className="sub-title">genres</span>
				<span className="genres value">{artist.genres}</span>
				<br />
			</div>
		</div>
	);
};

export default index;
