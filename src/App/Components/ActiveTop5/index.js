import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const index = (props) => {
	const selectionHandler = (artist) => {
		props.setArtistObject(artist);
	};

	const removeArtistFromActiveList = (index) => {
		const activeListCopy = Array.from(props.activeList);
		activeListCopy.splice(index, 1);
		props.updateActiveList(activeListCopy);
	};

	const ranks = props.activeList;

	return (
		<div className="user-top-5">
			<div className="ranked-artist">
				{ranks[0] ? (
					<Fragment>
						<div className="remove-artist-container">
							<Link to={`/artist/${ranks[0].id}`} onClick={() => selectionHandler(ranks[0])}>
								<span className="ranked-artist-name">{ranks[0].name}</span>
							</Link>
							<span className="remove-artist" onClick={() => removeArtistFromActiveList(0)}>
								×
							</span>
						</div>
						<img src={ranks[0].thumbnail} alt={ranks[0].name} />
					</Fragment>
				) : (
					'1'
				)}
			</div>
			<div className="ranked-artist">
				{ranks[1] ? (
					<Fragment>
						<div className="remove-artist-container">
							<Link to={`/artist/${ranks[1].id}`} onClick={() => selectionHandler(ranks[1])}>
								<span className="ranked-artist-name">{ranks[1].name}</span>
							</Link>
							<span className="remove-artist" onClick={() => removeArtistFromActiveList(1)}>
								×
							</span>
						</div>
						<img src={ranks[1].thumbnail} alt={ranks[1].name} />
					</Fragment>
				) : (
					'2'
				)}
			</div>
			<div className="ranked-artist">
				{ranks[2] ? (
					<Fragment>
						<div className="remove-artist-container">
							<Link to={`/artist/${ranks[2].id}`} onClick={() => selectionHandler(ranks[2])}>
								<span className="ranked-artist-name">{ranks[2].name}</span>
							</Link>
							<span className="remove-artist" onClick={() => removeArtistFromActiveList(2)}>
								×
							</span>
						</div>
						<img src={ranks[2].thumbnail} alt={ranks[2].name} />
					</Fragment>
				) : (
					'3'
				)}
			</div>
			<div className="ranked-artist">
				{ranks[3] ? (
					<Fragment>
						<div className="remove-artist-container">
							<Link to={`/artist/${ranks[3].id}`} onClick={() => selectionHandler(ranks[3])}>
								<span className="ranked-artist-name">{ranks[3].name}</span>
							</Link>
							<span className="remove-artist" onClick={() => removeArtistFromActiveList(3)}>
								×
							</span>
						</div>
						<img src={ranks[3].thumbnail} alt={ranks[3].name} />
					</Fragment>
				) : (
					'4'
				)}
			</div>
			<div className="ranked-artist">
				{ranks[4] ? (
					<Fragment>
						<div className="remove-artist-container">
							<Link to={`/artist/${ranks[4].id}`} onClick={() => selectionHandler(ranks[4])}>
								<span className="ranked-artist-name">{ranks[4].name}</span>
							</Link>
							<span className="remove-artist" onClick={() => removeArtistFromActiveList(4)}>
								×
							</span>
						</div>
						<img src={ranks[4].thumbnail} alt={ranks[4].name} />
					</Fragment>
				) : (
					'5'
				)}
				{ranks.length > 5 ? (
					<Fragment>
						<span className="additional-artists-count">{`+${ranks.length - 5}`}</span>{' '}
						<span className="edit-ranked-artists">Edit</span>
					</Fragment>
				) : null}
			</div>
		</div>
	);
};

export default index;
