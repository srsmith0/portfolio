import React from 'react';
import { Icon } from 'semantic-ui-react';

function Home() {
	return (
		<div className="home-page">
			<h1>
				<span className="hello">Hello. </span>
				<span className="name">I am Shawn Smith</span>
			</h1>
			<div className="bottom-header">
				<h3 className="home-sub-title">Full Stack Developer</h3>
				<div className="home-buttons">
					<a href="https://www.linkedin.com/in/shawnsmith11/" target="_blank" rel="noopener noreferrer">
						<Icon name="linkedin" size="large" link />
					</a>
					<a href="https://github.com/srsmith0" target="_blank" rel="noopener noreferrer">
						<Icon color="black" name="github" size="large" link />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Home;
