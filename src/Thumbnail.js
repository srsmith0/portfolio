import React from 'react';
import { Icon } from 'semantic-ui-react';

function Thumbnail(props) {
	return (
		<div className="project">
			<div className="project-image">
				<a href={props.deploy} target="_blank">
					<img src={props.image} alt="Project Image" />
				</a>
			</div>
			<div className="project-info">
				<p className="project-title">{props.title}</p>
				<div className="project-description">
					<p>{props.description}</p>
					<div className="links">
						<div className="single-link">
							<p>Code:</p>
							<a href={props.code} target="_blank">
								<Icon name="code" color="grey" size="large" link />
							</a>
						</div>
						<div className="single-link">
							<p>Deployed:</p>
							<a href={props.deploy} target="_blank">
								<Icon name="world" color="black" size="large" link />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Thumbnail;
