/* eslint-disable react/style-prop-object */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
	BsDashLg,
	BsEnvelopeFill,
	BsLinkedin,
	BsTelephoneFill,
} from 'react-icons/bs';

import React from 'react';
import { Link } from 'react-router-dom';
import './css/contact.css';

const Contact = () => {
	return (
		<div>
			<div id="contact">
				<section id="define">
					<h1>CONTACTS</h1>
					<ul className="list-nav">
						<Link to="/home" style={{ padding: '5px', color: '#c0eef2' }}>
							<h6>Home</h6>
						</Link>
						<h4 style={{ padding: '10px' }}>
							<BsDashLg />
						</h4>

						<Link to="/contact" style={{ paddingTop: '5px', color: '#537fe7' }}>
							<h6>Contact</h6>
						</Link>
					</ul>
				</section>
				<div className="content-wrap">
					<section id="quick-support">
						<h2>Quick Support</h2>
						<p style={{ marginBottom: 0 }}>
							These are the words we live by in everything we do. Every story we
							tell, every brand <br />
							we build, and every interation we create
						</p>
						<div className="myinfo">
							<h5 style={{ marginBottom: '1rem' }}>
								<BsTelephoneFill
									fontStyle={{ size: '30px' }}
									style={{ margin: '20px' }}
								/>
								Phone Me 24/7: <br />
								<div className="small">+918 766 813 856</div>
							</h5>
							<h5 style={{ marginBottom: '1rem' }}>
								<BsEnvelopeFill
									fontStyle={{ size: '30px' }}
									style={{ margin: '20px' }}
								/>
								Email Me 24/7: <br />
								<div className="small">+918 766 813 856</div>
							</h5>
							<h5 style={{ marginBottom: '1rem' }}>
								<BsLinkedin
									fontStyle={{ size: '30px' }}
									style={{ margin: '20px' }}
								/>
								Follow Me: <br />
								<div className="small">+918 766 813 856</div>
							</h5>
						</div>
					</section>
					<section id="comment">
						<h2>Get in Touch</h2>
						<form>
							<input
								type="name"
								id="name"
								name="name"
								required
								placeholder="Name"
								style={{ marginBottom: '1rem' }}
							/>
							<br />
							<br />
							<input
								type="email"
								id="email"
								name="email"
								required
								placeholder="Email"
								style={{ marginBottom: '1rem' }}
							/>
							<br />
							<br />
							<textarea
								id="message"
								name="message"
								required
								placeholder="Message"
								style={{ marginBottom: '1rem' }}
							></textarea>
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
