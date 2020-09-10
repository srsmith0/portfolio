import React from 'react';
import self from './self.JPG';
import { Icon } from 'semantic-ui-react';

function About(props) {
	return (
		<div>
			<h1 className="about-title">About Me</h1>
			<div className="about-section">
				<div className="self-image">
					<img src={self} alt="Self" />
				</div>
				<div className="about-description">
					<div className="description-sub">
						<p>
							My name is Shawn Smith and I am a Full Stack Developer based in Salt Lake City, UT. I
							attended the University of Utah/DevPoint Lab’s Web Development Bootcamp in May 2020. I was
							in the brewing industry for six years but decided to change careers. I have a passion for
							creating things for people to enjoy, no matter the medium and software development fits
							perfectly into this passion. I began teaching myself web development in January 2020 and was
							immediately drawn to the challenge and creativity that programming offers. Brewing taught me
							a continous improvement mindset and I improve, learn, and create new things every day.
						</p>
					</div>
				</div>
			</div>
			<div className="skills">
				<h3 className="skills-title">My Skills</h3>
				<div className="skills-list">
					<p>JavaScript</p>
					<p>HTML</p>
					<p>CSS</p>
					<p>React.js</p>
					<p>Rails</p>
					<p>SQL</p>
				</div>
				<div className="about-icons">
					<Icon name="js square" color="yellow" size="huge" />
					<Icon name="html5" color="red" size="huge" />
					<Icon name="css3 alternate" color="blue" size="huge" />
					<Icon name="react" color="blue" size="huge" />
					<Icon name="gem" color="red" size="huge" />
				</div>
			</div>
		</div>
	);
}

export default About;
