import React from 'react';

export default class Navbar extends React.Component {


	render() {
		return (
			<nav className="nav-bar">
					<a href="#profile">Star Wars</a>
					<a href="#films">Films</a>
					<a href="#contact">Contact</a>
			</nav>
		);
	}
}
