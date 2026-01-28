import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, image, technologies, liveLink } = props;

	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					{/* Project Image */}
					{image && (
						<div className="project-image-wrapper">
							<img src={image} alt={title} className="project-image" loading="lazy" />
							<div className="project-logo-overlay">
								<span className="project-emoji-logo">{logo}</span>
							</div>
						</div>
					)}

					{/* Project Content */}
					<div className="project-content">
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>

						{/* Technologies */}
						{technologies && technologies.length > 0 && (
							<div className="project-technologies">
								{technologies.map((tech, index) => (
									<span key={index} className="tech-badge">{tech}</span>
								))}
							</div>
						)}

						{/* Links */}
						<div className="project-links">
							{/* GitHub Link */}
							<a
								href={link}
								target="_blank"
								rel="noopener noreferrer"
								className="project-link project-link-github"
							>
								<FontAwesomeIcon icon={faGithub} className="project-link-icon" />
								<span className="project-link-text">{linkText || "View Code"}</span>
							</a>

							{/* Live Demo Link */}
							{liveLink && (
								<a
									href={liveLink}
									target="_blank"
									rel="noopener noreferrer"
									className="project-link project-link-live"
								>
									<FontAwesomeIcon icon={faExternalLinkAlt} className="project-link-icon" />
									<span className="project-link-text">Live Demo</span>
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;

