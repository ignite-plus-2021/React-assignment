import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Contact_Information() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>PROJECTS</strong>
					</h6>
					<div className="card-content">
						<h6 className="mt-bottom">
							<strong>Breathe</strong>
						</h6>
						<p className="grey-text">
							A mental health companion helping in real time deep breathing exercise and
							analyzes the breathing trends in the form of a graph to get an understanding
							or talk to a virtual companion to talk to and express feelings.
							<br></br><button class='btn blue lighten-4'><a href={"https://github.com/Keerthanab14/breathe"}>
								View</a></button>
						</p>
					</div>
					<div className="card-content">
						<h6 className="mt-bottom">
							<strong>Credit card fraudulence detector</strong>
						</h6>
						<p className="grey-text">
							Checks and determines the possibility of a person to skip payment in the
							consecutive month based on their previous payment history.
							<br></br><button class='btn blue lighten-4'><a href={"https://github.com/Keerthanab14/Technocolabs-Internship/tree/master/credit-card-fraudulence-deployment-master"}>
								View</a></button>
						</p>
					</div>
					<div className="card-content">
						<h6 className="mt-bottom">
							<strong>Intruder detector</strong>
						</h6>
						<p className="grey-text">
							This Intruder Detector detects if any person enters the place and sends an alert to the user through Telegram instantaneously.
							IoT, Telegram Bot, Twilio, Sandbox, motion sensor.
							<br></br><button class='btn blue lighten-4'><a href={"https://github.com/Keerthanab14"}>
								View</a></button>
						</p>
					</div>
				</div>
				<div class='card-content'>
					<h6>
						<strong>ACHIEVEMENTS</strong>
					</h6>


					<p className="grey-text">
						Winner of Best Surfs Up hack counducted by MLH.

					</p>

				</div>
			</div>
		</div>
	);
}
