// Technology icon mapping
const techIcons = {
    "C": "/assets/C_Programming_Language.svg.png",
    "C++": "/assets/C++_Logo.svg.png",
    "Java": "/assets/java.png",
    "JavaScript": "/assets/javascript.png",
    "React": "/assets/react.png",
    "Node.js": "/assets/nodejs.png",
    "MongoDB": "/assets/mongodb.png",
    "Python": "/assets/python.png",
    // Add more mappings as needed
};

export const getTechIcon = (techName) => {
    return techIcons[techName] || null;
};

export default techIcons;
