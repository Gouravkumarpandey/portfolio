import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faMapMarkerAlt, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";



const Experience = () => {
	// Safety check for experience data
	if (!INFO.experience || !Array.isArray(INFO.experience)) {
		return (
			<div className="experience">
				<div className="experience-header">
					<FontAwesomeIcon icon={faBriefcase} className="experience-icon" />
					<h2 className="experience-title">Work Experience</h2>
				</div>
				<div className="experience-placeholder">
					<p>Experience data is being loaded...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="experience">
			<div className="experience-header">
				<FontAwesomeIcon icon={faBriefcase} className="experience-icon" />
				<h2 className="experience-title">Work Experience</h2>
			</div>
			
			<div className="experience-list">
				{INFO.experience.map((exp, index) => (
					<div key={index} className="experience-item">
						<div className="experience-item-header">
							<h3 className="experience-job-title">{exp.title}</h3>
							<div className="experience-company-info">
								<span className="experience-company">{exp.company}</span>
								<div className="experience-meta">
									<span className="experience-location">
										<FontAwesomeIcon icon={faMapMarkerAlt} className="meta-icon" />
										{exp.location}
									</span>
									<span className="experience-duration">
										<FontAwesomeIcon icon={faCalendarAlt} className="meta-icon" />
										{exp.duration}
									</span>
								</div>
							</div>
						</div>
						
						<div className="experience-description">
							<ul className="experience-list-items">
								{exp.description.map((item, itemIndex) => (
									<li key={itemIndex} className="experience-list-item">
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;