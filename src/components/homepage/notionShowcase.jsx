import React from "react";
import "./styles/notionShowcase.css";

const NotionShowcase = () => {
    return (
        <div className="notion-showcase-section">
            <div className="notion-showcase-container">
                <div className="notion-showcase-content">
                    <h2 className="notion-showcase-title">
                        Build with Modern Tools
                    </h2>
                    <p className="notion-showcase-description">
                        Creating intelligent solutions with cutting-edge technology and AI-powered workflows.
                    </p>
                    <div className="notion-showcase-features">
                        <div className="notion-feature-item">
                            <span className="notion-feature-icon">⚡</span>
                            <span className="notion-feature-text">Fast Performance</span>
                        </div>
                        <div className="notion-feature-item">
                            <span className="notion-feature-icon">🤖</span>
                            <span className="notion-feature-text">AI Integration</span>
                        </div>
                        <div className="notion-feature-item">
                            <span className="notion-feature-icon">🎨</span>
                            <span className="notion-feature-text">Beautiful Design</span>
                        </div>
                    </div>
                </div>

                <div className="notion-showcase-image-container">
                    <div className="notion-image-wrapper">
                        <img
                            src="https://www.notion.com/_next/image?url=%2Ffront-static%2Fnosey%2Ffall%2Ffirst_customAgents.png&w=640&q=90"
                            alt="Custom AI Agents - Notion Interface"
                            className="notion-showcase-image"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotionShowcase;
