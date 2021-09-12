import React from 'react';
import Thumbnail from './Thumbnail';
import l3 from './L3.png';
import dnd from './dndchars.png';
import ultraPlanner from './ultraPlanner.png';

function Projects() {
	const l3Description =
		`Live, Laugh, Lager is an app for reviewing beers, making beer related posts, following friends, and finding breweries.
		 It was created with React.js, Rails, and a third party API.`;

	const dndDescription =
		`D&D Database started as a Hackathon project that I then polished. I did all of the SQL programming to display a Dungeons
		 and Dragons character information and then created a simple webpage to navigate through the database's
		  seeded information. It was created with React.js, SQL, and Rails`;

	const ultraDescription =
		`I created this tool to plan race day strategy for ultra marathons.  I got tired of making individual spreedsheets
		 for every race I did so, I made this application that takes race information and gives useful stats.  The most useful
		 part of this app is the aid station table at the bottom.  It tells a user the estimated time between aid stations,
		 their estimated time of arrival, and how many calories, fluid, and sodium they should consume.  Once it is complete,
		 they can export the table to an xlsx file.  Built with NextJS.`
	
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
					deploy="https://ultra-planner.vercel.app/"
					image={ultraPlanner}
					title="The Ultra Planner"
					code="https://github.com/srsmith0/race-planner"
					description={ultraDescription}
				/>

				<Thumbnail
					deploy="https://dnd-characters-db.herokuapp.com/"
					image={dnd}
					title="D&D Database"
					code="https://github.com/srsmith0/dnd"
					description={dndDescription}
				/>
			</div>
		</div>
	);
}

export default Projects;
