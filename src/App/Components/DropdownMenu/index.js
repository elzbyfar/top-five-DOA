import React from 'react';

const index = (props) => {
	const toggle = () => props.setDropdownOpen((prevState) => !prevState);
	const selectHandler = (thread) => {
		props.setThread(thread);
		toggle();
	};

	return (
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
	);
};

export default index;
