import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

class NavBar extends Component {
	state = { activeItem: 'home' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

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
{
	/* <div className="navigation">
				<div className="navigation-sub">
					<Link to="/" className="item">
						<h3>Home</h3>
					</Link>
					<Link to="/about" className="item">
						<h3>About</h3>
					</Link>
					<Link to="/projects" color="white" className="item">
						<h3>Projects</h3>
					</Link>
					<Link to="/contact" className="item">
						<h3>Contact</h3>
					</Link>
				</div>
			</div> */
}
// 			<Segment inverted>
// 				<Menu className="navbar" inverted pointing secondary>
// 					<Link to="/">
// 						<Menu.Item
// 							position="right"
// 							name="home"
// 							to="/"
// 							active={activeItem === 'home'}
// 							onClick={this.handleItemClick}
// 						/>
// 					</Link>
// 					<Link to="/about">
// 						<Menu.Item
// 							position="right"
// 							name="about"
// 							to="/about"
// 							active={activeItem === 'about'}
// 							onClick={this.handleItemClick}
// 						/>
// 					</Link>
// 					<Link to="/projects">
// 						<Menu.Item
// 							position="right"
// 							name="projects"
// 							to="/projects"
// 							active={activeItem === 'projects'}
// 							onClick={this.handleItemClick}
// 						/>
// 					</Link>
// 					<Link to="/contact">
// 						<Menu.Item
// 							position="right"
// 							name="contact"
// 							to="/contact"
// 							active={activeItem === 'contact'}
// 							onClick={this.handleItemClick}
// 						/>
// 					</Link>
// 				</Menu>
// 			</Segment>
// 		);
// 	}
// }

export default NavBar;
