import React, { useState } from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';

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
				enctype="multipart/form-data"
			>
				<Form.Row className="justify-content-center">
					<Form.Group as={Col} md="2" controlId="validationCustom01">
						<Form.Label>Name</Form.Label>
						<Form.Control required type="text" placeholder="Name" />
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>
				<Form.Row className="justify-content-center">
					<Form.Group as={Col} md="2" controlId="validationCustom02">
						<Form.Label>Email</Form.Label>
						<Form.Control required type="text" placeholder="Email" />
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>
				<Form.Row className="justify-content-center">
					<Form.Group as={Col} md="3" controlId="validationCustom03">
						<Form.Label>Message</Form.Label>
						<Form.Control type="text" as="textarea" rows="5" required />
						<Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>
				<Button type="submit" variant="success">
					Submit
				</Button>
			</Form>
			<div className="contact-buttons">
				<a href="https://www.linkedin.com/in/shawnsmith11/" target="_blank">
					<Icon name="linkedin" size="huge" link />
				</a>
				<a href="https://github.com/srsmith0" target="_blank">
					<Icon color="black" name="github" size="huge" link />
				</a>
			</div>
		</div>
	);
}

export default Contact;
