import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import PageTitle from '../components/page_title';

const Projects = () => {
	return (
		<div>
			<PageTitle title="Projects"></PageTitle>
			<div
				className="content-wrap"
				style={{
					backgroundColor: '#537fe7',
					borderRadius: '20px',
					height: '30rem',
				}}
			></div>
		</div>
	);
};

export default Projects;
