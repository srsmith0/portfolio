import React from 'react';
import Thumbnail from './Thumbnail';
import l3 from './L3.jpeg';
import familyTalk from './familytalk.jpeg';

function Projects(props) {
	const l3Description =
		'Live, Laugh, Lager is an app for reviewing beers, making beer related posts, following friends, and finding breweries. I always found it incredibly frustrating as a brewer that other beer rating apps only required an overall rating for a beer score.  So I require a user to rate 4 critera and the app creates the overall score.  The most challenging part of the project was using a third party API call.  I complete this call in the backend, something that I never had done before. It was made with React.js and Rails.';

	const familyTalkDescription =
		'Family Talk allows users to create boards with a specific topic, create posts about that topic within the board, has the ability to like and comment on posts, and an option to follow boards. This was a group project through the University of Utah/DevPoint Labs. I created the comment components, the like functionality, and the follow board functionality. It was made with React.js and Rails.';
	return (
		<div>
			<h1 className="project-page-title">Projects</h1>
			<Thumbnail
				deploy="https://live-laugh-lager.herokuapp.com"
				image={l3}
				title="Live, Laugh, Lager"
				code="https://github.com/srsmith0/live-laugh-lager"
				description={l3Description}
			/>
			<Thumbnail
				deploy="https://family-talk.herokuapp.com/"
				image={familyTalk}
				title="Family Talk"
				code="https://github.com/srsmith0/family-talk"
				description={familyTalkDescription}
			/>
		</div>
	);
}

export default Projects;
