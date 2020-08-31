import React from 'react';

const Index = (props) => {
	const openSearchbar = () => {
		props.showSearchBar(!props.searchBar);
		document.querySelector('.search-bar').focus();
	};

	const reload = () => {
		window.location.reload();
	};
	return (
		<div className="nav">
			<i className="fa fa-lg fa-bars" aria-hidden="true" />
			<img src="logo.png" alt="logo" className="logo" onClick={() => reload()} />
			<i
				className="fa fa-lg fa-search nav-bar-search"
				style={{ opacity: props.searchBar ? 0 : 1, transition: 'all 0.3s ease-in-out' }}
				onClick={() => openSearchbar()}
			/>
		</div>
	);
};

export default Index;
