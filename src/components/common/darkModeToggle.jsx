import React from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const DarkModeToggle = () => {
    const [isDark, setIsDark] = React.useState(() => {
        // Check localStorage first
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            return savedTheme === "dark";
        }
        // Check system preference
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    React.useEffect(() => {
        // Apply theme to document
        if (isDark) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <button
            className="dark-mode-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <FontAwesomeIcon
                icon={isDark ? faSun : faMoon}
                className="dark-mode-icon"
            />
        </button>
    );
};

export default DarkModeToggle;
