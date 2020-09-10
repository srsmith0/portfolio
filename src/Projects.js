import React from 'react';
import Thumbnail from './Thumbnail';
import l3 from './L3.jpeg';
import familyTalk from './familytalk.jpeg';
import dnd from './dndchars.png';

function Projects(props) {
	const l3Description =
		'Live, Laugh, Lager is an app for reviewing beers, making beer related posts, following friends, and finding breweries. I always found it incredibly frustrating as a brewer that other beer rating apps only required an overall rating for a beer score.  So I require a user to rate 4 critera and the app creates the overall score.  The most challenging part of the project was using a third party API call.  I complete this call in the backend, something that I never had done before. It was created with React.js and Rails.';

	const dndDescription =
		"D&D Database started as a Hackathon project that I then polished. I did all of the SQL programming to display a Dungeons and Dragons character information during the hackathon and then created a simple webpage to navigate through the database's seeded information. I have included a link to the database diagram as well. It was created with React.js, SQL, and Rails";

	const familyTalkDescription =
		'Family Talk allows users to create boards with a specific topic, create posts about that topic within the board, has the ability to like and comment on posts, and an option to follow boards. This was a group project through the University of Utah/DevPoint Labs. I created the comment components, the like functionality, and the follow board functionality. It was created with React.js and Rails.';
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
				deploy="https://dnd-characters-db.herokuapp.com/"
				image={dnd}
				title="D&D Database"
				code="https://github.com/srsmith0/dnd"
				description={dndDescription}
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
