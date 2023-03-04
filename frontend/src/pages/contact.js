/* eslint-disable react/style-prop-object */

import React, { useState } from 'react';
import PageTitle from '../components/page_title';

import { BsEnvelopeFill, BsLinkedin, BsTelephoneFill } from 'react-icons/bs';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const handleSubmit = (event) => {
		event.preventDefault();

		// Send POST request to server using fetch API
		fetch('/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				message,
			}),
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data);
			});

		// Reset form input values
		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<div>
			<div id="contact">
				<PageTitle title="Contact"></PageTitle>

				<div className="content-wrap">
					<section id="quick-support">
						<h2>Quick Support</h2>
						<p style={{ marginBottom: 0 }}>
							These are the words we live by in everything we do. Every story we
							tell, every brand <br />
							we build, and every interation we create
						</p>
						<div className="myinfo">
							<h5>
								<BsTelephoneFill />
								Phone Me 24/7: <br />
								<div className="small">+918 766 813 856</div>
							</h5>
							<h5>
								<BsEnvelopeFill />
								Email Me 24/7: <br />
								<div className="small">prajwalkuchewar3@gmail.com</div>
							</h5>
							<h5>
								<BsLinkedin />
								Follow Me: <br />
								<div className="small">linkedin.com/in/prajwal018</div>
							</h5>
						</div>
					</section>
					<section id="comment">
						<h2>Get in Touch</h2>
						<form onSubmit={handleSubmit}>
							<input
								type="name"
								id="name"
								name="name"
								required
								placeholder="Name"
								value={name}
								onChange={(event) => setName(event.target.value)}
							/>
							<br />
							<br />
							<input
								type="email"
								id="email"
								name="email"
								required
								placeholder="Email"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
							<br />
							<br />
							<textarea
								id="message"
								name="message"
								required
								placeholder="Message"
								value={message}
								onChange={(event) => setMessage(event.target.value)}
							></textarea>
							<br />
							<br />
							<input
								type="submit"
								value="Leave a comment"
								style={{ backgroundColor: '#537fe7', color: '#fff' }}
							/>
						</form>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Contact;
