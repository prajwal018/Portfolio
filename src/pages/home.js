import {
	CButton,
	CCard,
	CCardBody,
	CCardText,
	CCardTitle,
	CCol,
	CRow,
} from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import YoutubeEmbed from '../components/youtube';
import './css/home.css';
const Home = () => {
	return (
		<div id="body">
			<section id="define">
				<img
					alt="A beautiful sunset over the mountains"
					src="https://picsum.photos/720/1080"
				/>
				<div className="image-overlay">
					<h3>Hi! I'm Prajwal Kuchewar -</h3>
					<h4>Software Engineer</h4>
					<p style={{ fontSize: 'x-small' }}>
						Proactive student eager to contribute to the coding community
						through hard work and dedication to quality. Seeking to use
						exceptional communication skills as Link team member/software
						developer. Proficiency in Python, Java, Data Structures, and
						Algorithms. Passionate about web development and user experience
						design.
					</p>
					<div className="mail-link">
						<h5>Email:</h5>
						<h5>Linked In:</h5>
					</div>
					<div className="contact" style={{ cursor: 'pointer' }}>
						<p to="prajwalkuchewar3@gmail.com">prajwalkuchewar3@gmail.com</p>
						<Link to="https://www.linkedin.com/in/prajwal018">
							<p>linkedin.com/in/prajwal018</p>
						</Link>
					</div>
					<button
						type="button"
						className="btn btn-dark"
						style={{ backgroundColor: '#537fe7' }}
					>
						Download CV
					</button>
					<button type="button" className="btn btn-dark">
						Hire Me Now
					</button>
				</div>
			</section>

			<main className="content-wrap">
				<section id="services">
					<CRow>
						<CCol sm={3}>
							<CCard>
								<CCardBody>
									<CCardTitle>Web Development</CCardTitle>
									<CCardText>
										With supporting text below as a natural lead-in to
										additional content.
									</CCardText>
									<CButton href="#">Go somewhere</CButton>
								</CCardBody>
							</CCard>
						</CCol>
						<CCol sm={3}>
							<CCard>
								<CCardBody>
									<CCardTitle>Software Development</CCardTitle>
									<CCardText>
										With supporting text below as a natural lead-in to
										additional content.
									</CCardText>
									<CButton href="#">Go somewhere</CButton>
								</CCardBody>
							</CCard>
						</CCol>
						<CCol sm={3}>
							<CCard>
								<CCardBody>
									<CCardTitle>UX Design</CCardTitle>
									<CCardText>
										With supporting text below as a natural lead-in to
										additional content.
									</CCardText>
									<CButton href="#">Go somewhere</CButton>
								</CCardBody>
							</CCard>
						</CCol>
					</CRow>
				</section>

				<section id="about">
					<div className="aboutme-text">
						<h3>Need Creative Website?</h3>
						<h3 style={{ width: '50%' }}>I can Help You!</h3>
						<p>
							Proactive student eager to contribute to the coding community
							through hard work and dedication to quality. Seeking to use
							exceptional communication skills as Link team member/software
							developer. Proficiency in Python, Java, Data Structures, and
							Algorithms. Passionate about web development and user experience
							design.
						</p>
						<h6>You Can Follow Me also Here:</h6>
						<Link to="https://www.instagram.com/prxjwxl.018/">
							<button
								style={{
									borderRadius: '20%',
									borderColor: 'transparent',
									backgroundColor: '#f96868',
								}}
							>
								<BsInstagram />
							</button>
						</Link>
						<Link to="https://www.linkedin.com/in/prajwal018">
							<button
								style={{
									borderRadius: '20%',
									backgroundColor: '#0077b5',
									borderColor: 'transparent',
								}}
							>
								<BsLinkedin />
							</button>
						</Link>
						<Link to="https://github.com/prajwal018">
							<button
								style={{
									borderRadius: '20%',
									borderColor: 'transparent',
									backgroundColor: '#000000',
									color: 'white',
								}}
							>
								<BsGithub />
							</button>
						</Link>
					</div>
					<div className="aboutme-pic">
						<img
							alt="A beautiful sunset over the mountains"
							src="https://avatars.githubusercontent.com/u/90618646?s=400&u=4da8a69b49d0c936615ec3c26eb1f304a1a298ae&v=4"
						/>
						<h2>Hi There!</h2>
						<p>Learn more about me and my background.</p>
					</div>
				</section>

				<section id="skills">
					<div className="skills-pic">
						<YoutubeEmbed embedId="rokGy0huYEA" />
						<h2>The best Tedtalk Ever!</h2>
						<p>Learn more about me and my background.</p>
					</div>
					<div className="skills-text">
						<h3>Need Creative Website?</h3>
						<h3
							style={{
								width: '50%',
								left: '50%',
								transform: 'translate(100%)',
								textAlign: 'center',
							}}
						>
							I can Help You!
						</h3>
						<p>
							Proactive student eager to contribute to the coding community
							through hard work and dedication to quality. Seeking to use
							exceptional communication skills as Link team member/software
							developer. Proficiency in Python, Java, Data Structures, and
							Algorithms. Passionate about web development and user experience
							design.
						</p>
						<h6>You Can Follow Me also Here:</h6>
						<Link to="https://www.instagram.com/praj_wal_018/">
							<button
								style={{
									borderRadius: '20%',
									borderColor: 'transparent',
									backgroundColor: '#f96868',
								}}
							>
								<BsInstagram />
							</button>
						</Link>
						<Link to="https://www.linkedin.com/in/prajwal018">
							<button
								style={{
									borderRadius: '20%',
									backgroundColor: '#0077b5',
									borderColor: 'transparent',
								}}
							>
								<BsLinkedin />
							</button>
						</Link>
						<Link to="https://github.com/prajwal018">
							<button
								style={{
									borderRadius: '20%',
									borderColor: 'transparent',
									backgroundColor: '#000000',
									color: 'white',
								}}
							>
								<BsGithub />
							</button>
						</Link>
					</div>
				</section>

				<section id="projects">
					<h2>My Projects</h2>
					<div id="carousel" className="carousel">
						<div className="carousel-indicators">
							<button
								type="button"
								data-bs-target="#carousel"
								data-bs-slide-to="0"
								className="active"
								aria-current="true"
								aria-label="Slide 1"
							></button>
							<button
								type="button"
								data-bs-target="#carousel"
								data-bs-slide-to="1"
								aria-label="Slide 2"
							></button>
							<button
								type="button"
								data-bs-target="#carousel"
								data-bs-slide-to="2"
								aria-label="Slide 3"
							></button>
						</div>

						<div className="carousel-inner">
							<div className="carousel-item active">
								<img
									alt="A beautiful sunset over the mountains"
									src="https://picsum.photos/1080/720"
									className="d-block w-100"
								/>
								<div className="carousel-caption">
									<h5>Project 1</h5>
									<p>
										Some representative placeholder content for the first slide.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<img
									alt="A beautiful sunset over the mountains"
									src="https://picsum.photos/1080/720"
									className="d-block w-100"
								/>
								<div className="carousel-caption">
									<h5>Project 2</h5>
									<p>
										Some representative placeholder content for the second
										slide.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<img
									alt="A beautiful sunset over the mountains"
									src="https://picsum.photos/1080/720"
									className="d-block w-100"
								/>
								<div className="carousel-caption">
									<h5>Project 3</h5>
									<p>
										Some representative placeholder content for the third slide.
									</p>
								</div>
							</div>
						</div>

						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#carousel"
							data-bs-slide="prev"
						>
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#carousel"
							data-bs-slide="next"
						>
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;