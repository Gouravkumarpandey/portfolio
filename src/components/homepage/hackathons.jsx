import React from "react";
import { FadeInUp, StaggerContainer, StaggerItem } from "../animations/FramerMotionComponents";


const Hackathon = ({ hackathon }) => {
    const { title, position, date, location, project, description, technologies, achievement, image } = hackathon;

    return (
        <StaggerItem>
            <div className="hackathon-card">
                <div className="hackathon-image-wrapper">
                    <img
                        src={image}
                        alt={title}
                        className="hackathon-image"
                        loading="lazy"
                    />
                    <div className="hackathon-position-badge">
                        {position}
                    </div>
                </div>

                <div className="hackathon-content">
                    <div className="hackathon-header">
                        <h3 className="hackathon-title">{title}</h3>
                        <div className="hackathon-meta">
                            <span className="hackathon-date">
                                <span className="meta-icon">📅</span>
                                {date}
                            </span>
                            <span className="hackathon-location">
                                <span className="meta-icon">📍</span>
                                {location}
                            </span>
                        </div>
                    </div>

                    <div className="hackathon-project">
                        <span className="project-label">Project:</span>
                        <span className="project-name">{project}</span>
                    </div>

                    <ul className="hackathon-description">
                        {description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <div className="hackathon-technologies">
                        {technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                        ))}
                    </div>

                    <div className="hackathon-achievement">
                        <span className="achievement-icon">🏆</span>
                        <span className="achievement-text">{achievement}</span>
                    </div>
                </div>
            </div>
        </StaggerItem>
    );
};

const Hackathons = ({ hackathons }) => {
    return (
        <div className="hackathons-section">
            <FadeInUp>
                <div className="hackathons-header">
                    <h2 className="section-title">Hackathon Achievements</h2>
                    <p className="section-subtitle">
                        Competitive programming and innovation challenges
                    </p>
                </div>
            </FadeInUp>

            <StaggerContainer className="hackathons-grid">
                {hackathons.map((hackathon, index) => (
                    <Hackathon key={index} hackathon={hackathon} />
                ))}
            </StaggerContainer>
        </div>
    );
};

export default Hackathons;
