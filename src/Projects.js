import React from 'react';
import Thumbnail from './Thumbnail';
import l3 from './L3.png';
import familyTalk from './familytalk.png';
import dnd from './dndchars.png';

function Projects(props) {
	const l3Description =
		'Live, Laugh, Lager is an app for reviewing beers, making beer related posts, following friends, and finding breweries. It was created with React.js, Rails, and a third party API.';

	const dndDescription =
		"D&D Database started as a Hackathon project that I then polished. I did all of the SQL programming to display a Dungeons and Dragons character information and then created a simple webpage to navigate through the database's seeded information. It was created with React.js, SQL, and Rails";

	const familyTalkDescription =
		'Family Talk allows users to create boards with a specific topic, create posts about that topic within the board, has the ability to like and comment on posts, and an option to follow boards. This was a group project through the University of Utah/DevPoint Labs. I created the comment components, the like functionality, and the follow board functionality. It was created with React.js and Rails.';
	return (
		<div>
			<h1 className="project-page-title">Projects</h1>
			<div className="project-list">
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
					trello="https://trello.com/b/4S8vMW3Q/familytalk"
					code="https://github.com/srsmith0/family-talk"
					description={familyTalkDescription}
				/>
			</div>
		</div>
	);
}

export default Projects;
