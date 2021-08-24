import React from 'react';

function About() {
	return (
		<div>
			<h1 className="about-title">About Me</h1>
			<div className="about-section">
				<div className="about-description">
					<p>
						My name is Shawn Smith and I am a Full Stack Developer based in Salt Lake City, UT. I attended
						the University of Utah/DevPoint Lab’s Web Development Bootcamp in May 2020.  I have a passion for creating things for
						people to enjoy, no matter the medium, and software development fits perfectly into this passion.
						I began teaching myself web development in January 2020 and was immediately drawn to the
						challenge and creativity that programming offers. I have worked in the beer brewing industry for 7 years
						and that time has instilled a continous improvement mindset in me.  I constantly want to improve, learn,
						and create new things every day.
					</p>
				</div>
			</div>
			<h2 className="skills-title">Skills</h2>
			<div className="skills">
				<div className="skills-card">
					<h3 className="skills-card-title">Front End</h3>
					<hr />
					<p>JavaScript</p>
					<p>React</p>
					<p>HTML</p>
					<p>CSS/Sass</p>
				</div>
				<div className="skills-card">
					<h3 className="skills-card-title">Back End</h3>
					<hr />
					<p>Ruby on Rails</p>
					<p>Node/Express</p>
					<p>SQL/PostgreSQL</p>
					<p>MongoDB</p>
				</div>
				<div className="skills-card">
					<h3 className="skills-card-title">Other</h3>
					<hr />
					<p>Git/GitHub</p>
					<p>Agile</p>
					<p>Chrome developer tools</p>
					<p>Heroku/Netlify</p>
				</div>
			</div>
		</div>
	);
}

export default About;
