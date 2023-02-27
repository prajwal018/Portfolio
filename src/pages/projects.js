import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { BsDashLg } from 'react-icons/bs';

import { Link } from 'react-router-dom';

const Projects = () => {
	return (
		<div>
			<section id="page-title">
				<h1>PROJECTS</h1>
				<ul className="list-nav">
					<Link to="/home">
						<h6>Home</h6>
					</Link>
					<h4 style={{ padding: '10px' }}>
						<BsDashLg />
					</h4>
					<Link to="/projects" style={{ color: '#537fe7' }}>
						<h6>Projects</h6>
					</Link>
				</ul>
			</section>
		</div>
	);
};

export default Projects;
