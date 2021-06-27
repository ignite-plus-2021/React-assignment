import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Profile from '../../components/pages/profile/Profile';
import About from '../../components/pages/about/About';
import Skills from '../../components/pages/skills/Skills';
import Contact from '../../components/pages/contact/Contact';
import Personal_information from '../../components/pages/personal_information/Personal_information';
import Experiences from '../../components/pages/experiences/Experiences';
import Educations from '../../components/pages/educations/Educations';
import Portfolios from '../../components/pages/portfolios/Portfolios';
import Footer from '../../components/footer/Footer';

export default class Home extends Component {
	render() {
		return (
			<section>
				<Navbar />
				<div className='container'>
					<div className='row'>
						<div className='col s12 m3'>
							<Profile />
						</div>
						<div className='col s12 m9'>
							<About />

							<Experiences />
							<Educations />


						</div>

					</div>
					<Footer />
				</div>
			</section>
		);
	}
}
