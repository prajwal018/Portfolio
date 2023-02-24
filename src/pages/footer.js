import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BsEnvelopeFill, BsLink, BsTelephoneFill } from 'react-icons/bs';
import './css/home.css';

import React from 'react';
import { Link } from 'react-router-dom';
const footer = () => {
	return (
		<footer>
			<section id="footer">
				<h2>Let's Talk!</h2>
				<div className="myinfo">
					<h5>
						<BsTelephoneFill />
						<br />
						<br />
						Phone Me: <br />
						<div className="small">+918 766 813 856</div>
					</h5>
					<h5>
						<BsEnvelopeFill />
						<br />
						<br />
						Email Me: <br />
						<div className="small">+918 766 813 856</div>
					</h5>
					<h5>
						<BsLink />
						<br />
						<br />
						Follow Me: <br />
						<div className="small">+918 766 813 856</div>
					</h5>
				</div>
				<Link to="/contact">
					<button>Hire Me</button>
				</Link>
			</section>
			<div className="copyright">
				<p>&copy; 2023 Prajwal Inc.</p>
			</div>
		</footer>
	);
};

export default footer;
