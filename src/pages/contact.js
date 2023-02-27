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

const Contact = () => {
	return (
		<div>
			<div id="contact">
				<section id="page-title">
					<h1>CONTACTS</h1>
					<ul className="list-nav">
						<Link to="/home">
							<h6>Home</h6>
						</Link>
						<h4 style={{ padding: '10px' }}>
							<BsDashLg />
						</h4>

						<Link to="/contact" style={{ color: '#537fe7' }}>
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
						<form>
							<input
								type="name"
								id="name"
								name="name"
								required
								placeholder="Name"
							/>
							<br />
							<br />
							<input
								type="email"
								id="email"
								name="email"
								required
								placeholder="Email"
							/>
							<br />
							<br />
							<textarea
								id="message"
								name="message"
								required
								placeholder="Message"
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
