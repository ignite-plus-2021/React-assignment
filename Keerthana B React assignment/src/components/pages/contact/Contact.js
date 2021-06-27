import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Contact() {
	return (
		<div>
			<div className="card">
				<div className="card-content">
					<center><h5 className="mt-bottom"><strong>CONTACT INFORMATION</strong></h5></center>
				</div>
				<div className="card-action">
					<center>
						<div className="row mt">
							<div className="col s12">
								<h6 style={{ textAlign: "center" }}>
									<p>

										<strong>Email id:</strong> keerthanareddyboreddy@gmail.com

									</p>
									<p>
										<strong>Phone number:</strong>8095926831
									</p>

								</h6>
							</div>


						</div>
					</center>
				</div>
			</div>
		</div>

	);
}
