import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { BsDashLg } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import './css/about.css';

const About = () => {
	return (
		<div>
			<h1>ABOUT</h1>
			<ul className="list-nav">
				<Link to="/home" style={{ padding: '5px', color: '#c0eef2' }}>
					<h6>Home</h6>
				</Link>
				<h4 style={{ padding: '10px' }}>
					<BsDashLg />
				</h4>
				<Link to="/about" style={{ paddingTop: '5px', color: '#537fe7' }}>
					<h6>About</h6>
				</Link>
			</ul>
		</div>
	);
};

export default About;
