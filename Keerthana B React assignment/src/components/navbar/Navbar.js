import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { HashLink as Link } from 'react-router-hash-link';

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className='light-blue darken-4'>
					<div className='container'>
						<div className='nav-wrapper'>
							<a href='https://drive.google.com/file/d/1t20eQgtlXq5nhAyf4WPcuxI_r28g0eVW/view?usp=sharing' className='links'><span className='fas fa-download' size="100px"> </span></a>
							<Link className='brand-logo'>
								My Resume
							</Link>
							<Link to='/' data-target='side-nav' className='sidenav-trigger'>
								<i className='material-icons'>menu</i>
							</Link>
							<ul className='right hide-on-med-and-down'>
								<li>
									<Link to='/'>
										<i class='fas fa-home'></i> Home
									</Link>
								</li>
								<li>
									<Link to='/skills'>
										<i class='fas fa-code'></i> Skills
									</Link>
								</li>
								<li>
									<Link to='/personal_information'>
										<i class='fas fa-info'></i> Personal Information
									</Link>
								</li>
								<li>
									<Link to='/contact'>
										<i class='fas fa-address-card'></i> Contact Information
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<ul className='sidenav' id='side-nav'>
					<li>
						<Link to='/'>
							<i class='fas fa-home'></i> Home
						</Link>
					</li>
					<li>
						<Link to='/skills'>
							<i class='fas fa-code'></i> Skills
						</Link>
					</li>
					<li>
						<Link to='/personal_information'>
							<i class='fas fa-id-info'></i> Personal Information
						</Link>
					</li>
					<li>
						<Link to='/contact'>
							<i class='fas fa-address-card'></i> Contact Information
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}
