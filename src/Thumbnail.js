import React from 'react';
import { Icon } from 'semantic-ui-react';

function Thumbnail(props) {
	return (
		<div className="project">
			<div className="card-side card-side-front">
				<div className="card-picture">
					<img className="card-image" src={props.image} alt="Project Page" />
				</div>
			</div>
			<div className="card-side card-side-back">
				<h2 className="project-title">{props.title}</h2>
				<div className="project-description">
					<p>{props.description}</p>
				</div>
				<div className="links">
					<div className="single-link">
						<p>Code</p>
						<a href={props.code} target="_blank" rel="noopener noreferrer">
							<Icon name="code" color="grey" size="large" link />
						</a>
					</div>
					<div className="single-link">
						<p>Live</p>
						<a href={props.deploy} target="_blank" rel="noopener noreferrer">
							<Icon name="world" color="black" size="large" link />
						</a>
					</div>
					{props.trello ? (
						<div className="single-link">
							<p>Trello Board</p>
							<a href={props.trello} target="_blank" rel="noopener noreferrer">
								<Icon name="trello" color="black" size="large" link />
							</a>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}

export default Thumbnail;
