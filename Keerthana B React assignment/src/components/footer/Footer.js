import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { HashLink as Link } from 'react-router-hash-link';

export default class Navbar extends Component {
	render() {
		return (
			<div className='footer'>
				<nav className='light-blue darken-4'>
					<div className='container'>
						<div className='nav-wrapper'>


							<ul className='brand-logo center'>

								<li>

									<a href='https://github.com/Keerthanab14' className='links'><span className='fab fa-github'></span></a>

								</li>
								<li>

									<a href='https://www.linkedin.com/in/keerthana-b-62a1b6194/' className='links'><span className='fab fa-linkedin'></span></a>


								</li>
								<li>

									<a href='https://keerthanareddybore.wixsite.com/myweb' className='links'><span className='fas fa-globe '></span></a>

								</li>
								<li>

									<a href='https://leetcode.com/Keerthana_B/' className='links'><span className='fas fa-code'></span></a>

								</li>
								<li>

									<a href='https://www.instagram.com/__keerthanareddy__/' className='links'><span className='fab fa-instagram'></span></a>

								</li>
								<li>


									<a href='https://twitter.com/keerthana1411' className='links'><span className='fab fa-twitter'></span></a>


								</li>
							</ul>
						</div>
					</div>
				</nav>


			</div>
		);
	}
}
