import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Navbar.js';
import Home from './Home.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import About from './About.js';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div>
				<NavBar />
				<Route exact path="/" component={Home} />
				<Route exact path="/projects" component={Projects} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/about" component={About} />
			</div>
		</BrowserRouter>
	);
}

export default App;
