import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import resume from './ShawnSmithResume.pdf';

function Contact(props) {
	const [ validated, setValidated ] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<div className="contact">
			<h1 className="contact-title">Get In Touch</h1>
			<Form
				noValidate
				validated={validated}
				onSubmit={handleSubmit}
				method="POST"
				action="mailto:srsmith11@live.com"
				encType="multipart/form-data"
			>
				<Form.Row className="justify-content-center">
					<Form.Group as={Col} md="3" controlId="validationCustom01">
						<Form.Label>Name</Form.Label>
						<Form.Control required type="text" placeholder="Name" />
					</Form.Group>
				</Form.Row>
				<Form.Row className="justify-content-center">
					<Form.Group as={Col} md="3" controlId="validationCustom02">
						<Form.Label>Email</Form.Label>
						<Form.Control required type="text" placeholder="Email" />
					</Form.Group>
				</Form.Row>
				<Form.Row className="justify-content-center">
					<Form.Group as={Col} md="4" controlId="validationCustom03">
						<Form.Label>Message</Form.Label>
						<Form.Control type="text" as="textarea" rows="5" required />
					</Form.Group>
				</Form.Row>
				<Button type="submit" variant="success">
					Submit
				</Button>
			</Form>
			<form className="resume" method="get" action={resume} target="_blank" rel="noopener noreferrer">
				<Button type="submit">Resume</Button>
			</form>
			<div className="contact-buttons">
				<a href="https://www.linkedin.com/in/shawnsmith11/" target="_blank" rel="noopener noreferrer">
					<Icon name="linkedin" size="huge" link />
				</a>
				<a href="https://github.com/srsmith0" target="_blank" rel="noopener noreferrer">
					<Icon color="black" name="github" size="huge" link />
				</a>
			</div>
		</div>
	);
}

export default Contact;
