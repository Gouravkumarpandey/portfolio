import React from "react";
import { FadeInUp } from "../animations/FramerMotionComponents";


const Certificate = ({ certificate }) => {
    const { title, issuer, date, credentialId, description, link, image } = certificate;

    return (
        <FadeInUp>
            <div className="certificate-card">
                <div className="certificate-image-container">
                    <img
                        src={image}
                        alt={title}
                        className="certificate-image"
                        loading="lazy"
                    />
                    <div className="certificate-overlay">
                        <span className="certificate-badge">✓ Verified</span>
                    </div>
                </div>

                <div className="certificate-content">
                    <h3 className="certificate-title">{title}</h3>
                    <div className="certificate-issuer">
                        <span className="issuer-icon">🏢</span>
                        <span>{issuer}</span>
                    </div>
                    <div className="certificate-date">
                        <span className="date-icon">📅</span>
                        <span>{date}</span>
                    </div>
                    <p className="certificate-description">{description}</p>

                    {credentialId && (
                        <div className="certificate-credential">
                            <span className="credential-label">Credential ID:</span>
                            <span className="credential-id">{credentialId}</span>
                        </div>
                    )}

                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="certificate-link"
                        >
                            <span>View Certificate</span>
                            <span className="link-arrow">→</span>
                        </a>
                    )}
                </div>
            </div>
        </FadeInUp>
    );
};

const Certificates = ({ certificates }) => {
    return (
        <div className="certificates-section">
            <div className="certificates-header">
                <h2 className="section-title">Certifications</h2>
                <p className="section-subtitle">
                    Professional certifications and achievements
                </p>
            </div>

            <div className="certificates-grid">
                {certificates.map((certificate, index) => (
                    <Certificate key={index} certificate={certificate} />
                ))}
            </div>
        </div>
    );
};

export default Certificates;
