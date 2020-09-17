import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import resume from './ShawnSmithResume.pdf';
import emailjs from 'emailjs-com';

function Contact(props) {
	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				e.target,
				process.env.REACT_APP_USER_ID
			)
			.then(
				(res) => {
					alert("Thanks! We'll talk soon");
				},
				(err) => {
					alert('Message failed to send');
				}
			);
	};

	return (
		<div className="contact">
			<h1 className="contact-title">Get In Touch</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Row className="justify-content-center">
					<Form.Group as={Col} md="3" controlId="validationCustom01">
						<Form.Label>Name</Form.Label>
						<Form.Control required type="text" placeholder="Name" name="from_name" />
					</Form.Group>
				</Form.Row>
				<Form.Row className="justify-content-center">
					<Form.Group as={Col} md="3" controlId="validationCustom02">
						<Form.Label>Email</Form.Label>
						<Form.Control required type="email" placeholder="Email" name="from_email" />
					</Form.Group>
				</Form.Row>
				<Form.Row className="justify-content-center">
					<Form.Group as={Col} md="4" controlId="validationCustom03">
						<Form.Label>Message</Form.Label>
						<Form.Control type="text" as="textarea" rows="5" required name="message" />
					</Form.Group>
				</Form.Row>
				<Button className="form-button" type="submit" variant="success">
					Submit
				</Button>
			</Form>
			<form className="resume" method="get" action={resume} target="_blank" rel="noopener noreferrer">
				<Button type="submit" className="form-button">
					Resume
				</Button>
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
