import React from 'react';

export default class Navbar extends React.Component {


	render() {
		return (
		<div className='navwrapper'>
			<nav className="nav-bar">
					<a href="/">Star Wars</a>
					<a href="#Films">Films</a>
					<a href="#contact">Contact</a>
			</nav>
		</div>
		);
	}
}
