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
import { BsChevronRight } from 'react-icons/bs';
import Flip from '../components/flip';
import PageTitle from '../components/page_title';

const About = () => {
	return (
		<div>
			<PageTitle title="About"></PageTitle>
			<div className="content-wrap">
				<section id="my-process">
					<h3>
						I Complete
						<br />
						Every Step Carefully
					</h3>
					<p>
						These are the words we live by in everything we do. Every story we
						tell, every brand we <br />
						build, and every interaction we create must not only look beautiful.
					</p>
					<CRow>
						<CCol sm={3}>
							<CCard id="process-card">
								<h4>01</h4>
								<CCardBody id="process-card">
									<CCardTitle id="process-card">Web Development</CCardTitle>
									<CCardText id="process-card">this is step 1</CCardText>
									<CButton id="process-card" href="# ">
										<BsChevronRight />
									</CButton>
								</CCardBody>
							</CCard>
						</CCol>
						<CCol sm={3}>
							<CCard id="process-card">
								<h4>02</h4>
								<CCardBody id="process-card">
									<CCardTitle id="process-card">Web Development</CCardTitle>
									<CCardText id="process-card">this is step 2</CCardText>
									<CButton id="process-card" href="# ">
										<BsChevronRight />
									</CButton>
								</CCardBody>
							</CCard>
						</CCol>
					</CRow>
					<CRow className="bottom">
						<CCol sm={3}>
							<CCard id="process-card">
								<h4>03</h4>
								<CCardBody id="process-card">
									<CCardTitle id="process-card">Web Development</CCardTitle>
									<CCardText id="process-card">this is step 3</CCardText>
									<CButton id="process-card" href="# ">
										<BsChevronRight />
									</CButton>
								</CCardBody>
							</CCard>
						</CCol>
						<CCol sm={3}>
							<CCard id="process-card">
								<h4>04</h4>
								<CCardBody id="process-card">
									<CCardTitle id="process-card">Web Development</CCardTitle>
									<CCardText id="process-card">this is step 4</CCardText>
									<CButton id="process-card" href="# ">
										<BsChevronRight />
									</CButton>
								</CCardBody>
							</CCard>
						</CCol>
					</CRow>
				</section>
				<section id="breif">
					<h3>
						Digital Web Products for
						<br /> Amazing Clients
					</h3>
					<p>
						Since 2015 I have been a visionary and a reliable <br />
						software engineer partner for world-class
						<br /> brands. These are the words we live by in
						<br /> everything we do.
					</p>
				</section>
			</div>
			<section id="feedback">
				<Flip />
				<Flip />
				<Flip />
			</section>
		</div>
	);
};

export default About;
