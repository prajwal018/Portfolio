import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

function App() {
	const [flip, setFlip] = useState(false);
	return (
		<ReactCardFlip isFlipped={flip} flipDirection="horizontal">
			<div className="react-card-front">
				<img
					className="card-img-top"
					src="https://picsum.photos/360/240"
					alt="nice"
				/>
				<button
					type="btn"
					className="flip-switch"
					onClick={() => setFlip(!flip)}
				>
					<BsFillArrowRightCircleFill />
				</button>
			</div>
			<div>
				<div className="react-card-back">
					<div className="card-body">
						<h4 className="card-title">Client Testimonials</h4>
						<p className="card-text" style={{ overflow: 'hidden' }}>
							Some quick example text to build on the card title and make up the
							bulk of the card's content. Some quick example text to build on
							the card title and make up the bulk of the caard's conte
						</p>
						<h5 className="card-subtitle mb-2 text-muted">Ronald Green</h5>
						<h6 className="card-subtitle mb-2 text-muted">UX Designer</h6>
					</div>
					<div className="feedback-button">
						<button
							type="btn"
							className="flip-switch"
							onClick={() => setFlip(!flip)}
						>
							<BsFillArrowRightCircleFill />
						</button>
					</div>
				</div>
			</div>
		</ReactCardFlip>
	);
}

export default App;
