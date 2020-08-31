import React from 'react';

const Index = (props) => {
	return (
		<div className="nav">
			<i className="fa fa-lg fa-bars" aria-hidden="true" />
			<img src="logo.png" alt="logo" className="logo" />
			<i className="fa fa-lg fa-search nav-bar-search" onClick={() => props.showSearchBar(!props.searchBar)} />
		</div>
	);
};

export default Index;
