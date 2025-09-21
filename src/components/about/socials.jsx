import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
	faInstagram,
	faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			{INFO.socials.twitter && (
				<div className="social">
					<a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
						<div className="social-icon">
							<svg
								width="24"
								height="24"
								viewBox="0 0 300 300"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								className="social-icon"
							>
								<path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
							</svg>
						</div>
						<div className="social-text">Follow on X</div>
					</a>
				</div>
			)}

			<div className="social">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on GitHub</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on LinkedIn</div>
				</a>
			</div>

			{INFO.socials.stackoverflow && (
				<div className="social">
					<a
						href={INFO.socials.stackoverflow}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faStackOverflow}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Follow on Stack Overflow</div>
					</a>
				</div>
			)}

			{INFO.socials.instagram && (
				<div className="social">
					<a
						href={INFO.socials.instagram}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faInstagram}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Follow on Instagram</div>
					</a>
				</div>
			)}

			<div className="email">
				<div className="email-wrapper">
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>

						<div className="social-text">{INFO.main.email}</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
