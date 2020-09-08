import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark" className="justify-content-center font-weight-bold">
				<Nav className="nav">
					<Nav.Link as={Link} to="/">
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="/about">
						About
					</Nav.Link>
					<Nav.Link as={Link} to="/projects">
						Projects
					</Nav.Link>
					<Nav.Link as={Link} to="/contact">
						Contact
					</Nav.Link>
				</Nav>
			</Navbar>
		);
	}
}

export default NavBar;
