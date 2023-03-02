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
import { LiteYoutubeEmbed } from 'react-lite-yt-embed';
import { NavLink } from 'react-router-dom';

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

					<button
						className="button"
						style={{ marginRight: '5%' }}
						onClick={() => {
							var resumeLink = document.createElement('a');
							resumeLink.href = './CoverLetter.pdf';
							resumeLink.download = 'Resume.pdf';
							document.body.appendChild(resumeLink);
							resumeLink.click();
							document.body.removeChild(resumeLink);
						}}
					>
						Download CV
					</button>
					<button type="button" style={{ backgroundColor: '#181823' }}>
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
										<p>
											With supporting text below as a natural lead-in to
											additional content.
										</p>
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
										<p>
											With supporting text below as a natural lead-in to
											additional content.
										</p>
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
										<p>
											With supporting text below as a natural lead-in to
											additional content.
										</p>
									</CCardText>
									<CButton href="#">Go somewhere</CButton>
								</CCardBody>
							</CCard>
						</CCol>
					</CRow>
				</section>

				<section id="about">
					<div className="aboutme-text" style={{ textAlign: 'left' }}>
						<h3>Need Creative Website?</h3>
						<h3>I can Help You!</h3>
						<p>
							Proactive student eager to contribute to the coding community
							through hard work and dedication to quality. Seeking to use
							exceptional communication skills as Link team member/software
							developer. Proficiency in Python, Java, Data Structures, and
							Algorithms. Passionate about web development and user experience
							design.
						</p>
						<h6>You Can Follow Me also Here:</h6>
						<NavLink to="https://www.instagram.com/prxjwxl.018/">
							<button
								style={{
									borderRadius: '20%',
									borderColor: 'transparent',
									backgroundColor: '#f96868',
								}}
							>
								<BsInstagram />
							</button>
						</NavLink>
						<NavLink to="https://www.linkedin.com/in/prajwal018">
							<button
								style={{
									borderRadius: '20%',
									backgroundColor: '#0077b5',
									borderColor: 'transparent',
								}}
							>
								<BsLinkedin />
							</button>
						</NavLink>
						<NavLink to="https://github.com/prajwal018">
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
						</NavLink>
					</div>
					<div className="aboutme-pic">
						<img
							alt="A beautiful sunset over the mountains"
							src="https://avatars.githubusercontent.com/u/90618646?s=400&u=4da8a69b49d0c936615ec3c26eb1f304a1a298ae&v=4"
							width="320"
							height="320"
						/>
						<h2>Hi There!</h2>
						<p>Learn more about me and my background.</p>
					</div>
				</section>

				<section id="skills">
					<div className="skills-pic">
						<LiteYoutubeEmbed id="Y2jyjfcp1as"></LiteYoutubeEmbed>
						<h2>The best Tedtalk Ever!</h2>
						<p>Learn more about me and my background.</p>
					</div>
					<div className="skills-text" style={{ textAlign: 'right' }}>
						<h3>Need Creative Website?</h3>
						<h3>I can Help You!</h3>
						<p>
							Proactive student eager to contribute to the coding community
							through hard work and dedication to quality. Seeking to use
							exceptional communication skills as Link team member/software
							developer. Proficiency in Python, Java, Data Structures, and
							Algorithms. Passionate about web development and user experience
							design.
						</p>
						<h6>You Can Follow Me also Here:</h6>
						<NavLink to="https://www.instagram.com/praj_wal_018/">
							<button
								style={{
									borderRadius: '20%',
									borderColor: 'transparent',
									backgroundColor: '#f96868',
								}}
							>
								<BsInstagram />
							</button>
						</NavLink>
						<NavLink to="https://www.linkedin.com/in/prajwal018">
							<button
								style={{
									borderRadius: '20%',
									backgroundColor: '#0077b5',
									borderColor: 'transparent',
								}}
							>
								<BsLinkedin />
							</button>
						</NavLink>
						<NavLink to="https://github.com/prajwal018">
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
						</NavLink>
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
									width="720"
									height="480"
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
									width="720"
									height="480"
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
									width="720"
									height="480"
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
