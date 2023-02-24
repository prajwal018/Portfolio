import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

function App() {
	const [flip, setFlip] = useState(false);
	return (
		<ReactCardFlip isFlipped={flip} flipDirection="horizontal">
			<div>
				<div className="card mb-3">
					<img
						className="card-img-top"
						src="https://picsum.photos/720/1080"
						alt="nice"
					/>
				</div>
				<br />
				<br />
				<button
					type="button"
					className="btn btn-dark"
					onClick={() => setFlip(!flip)}
				>
					Flip
				</button>
			</div>
			<div>
				<div className="card mb-3">
					<div className="card-body">
						<h4 className="card-title">Client Testimonials</h4>

						<p className="card-text" style={{ overflow: 'hidden' }}>
							Some quick example text to build on the card title and make up the
							bulk of the card's content. Some quick example text to build on
							the card title and make up the bulk of the caard's conte
						</p>
						<h5 className="card-subtitle mb-2 text-muted">Ronald Green</h5>
						<h6 className="card-subtitle mb-2 text-muted">UX Designer</h6>
						<div className="feedback-button"></div>
					</div>
				</div>
				<br />
				<button
					type="button"
					className="btn btn-dark"
					onClick={() => setFlip(!flip)}
				>
					Flip
				</button>
			</div>
		</ReactCardFlip>
	);
}

export default App;
