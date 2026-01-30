import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";


const Skills = () => {
    return (
        <div className="skills-section" style={{ width: '100%' }}>
            <h2 className="text-section-heading text-primary font-semibold mb-8" style={{ textAlign: 'center', fontSize: '2.5rem' }}>Technical Skills</h2>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 32,
                    flexWrap: 'wrap',
                    width: '100%',
                }}
                className="skills-icons-responsive"
            >
                <span>
                    <svg viewBox="0 0 128 128" width="64" height="64">
                        <path fill="#a9bacd" d="M125 50c-4-32-24-50-62-50C29 0 3 24 3 64c0 39 24 64 64 64 32 0 55-19 58-50H87c-2 11-8 20-20 20-21 0-24-16-24-33 0-23 8-35 22-35 13 0 20 7 22 20z"></path>
                    </svg>
                </span>
                <span>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" width="80" height="80" />
                </span>
                <span>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" width="80" height="80" />
                </span>
                <span>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" width="80" height="80" />
                </span>
                <span>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" width="80" height="80" />
                </span>
                <span>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" width="80" height="80" />
                </span>
                <span>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" alt="Redux" width="80" height="80" />
                </span>
                <span>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="80" height="80" />
                </span>
                <span>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="80" height="80" />
                </span>
                <span>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width="80" height="80" />
                </span>
                <span>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original-wordmark.svg" alt="Redis" width="80" height="80" />
                </span>
                <span>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" width="80" height="80" />
                </span>
                <span>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" width="80" height="80" />
                </span>
                <span>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" alt="Docker" width="80" height="80" />
                </span>
                <span>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" width="80" height="80" />
                </span>
                <span>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" width="80" height="80" />
                </span>
            </div>
        </div>
    );
};

export default Skills;
