import React from "react";


/**
 * Notion-style Icon Component
 * Displays icons with Notion's aesthetic - emoji-based or simple SVG icons
 */

const NotionIcon = ({
    type = "emoji",
    icon = "📄",
    size = "medium",
    color,
    className = "",
    animated = false,
    onClick
}) => {
    const sizeClasses = {
        small: "notion-icon-small",
        medium: "notion-icon-medium",
        large: "notion-icon-large",
        xlarge: "notion-icon-xlarge"
    };

    const animationClass = animated ? "notion-icon-animated" : "";

    if (type === "emoji") {
        return (
            <span
                className={`notion-icon notion-icon-emoji ${sizeClasses[size]} ${animationClass} ${className}`}
                onClick={onClick}
                role={onClick ? "button" : "img"}
                aria-label={`Icon: ${icon}`}
            >
                {icon}
            </span>
        );
    }

    // SVG Icons
    const svgIcons = {
        // Document Icons
        document: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="14 2 14 8 20 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        // Folder Icon
        folder: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        // Link Icon
        link: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        // Arrow Right
        arrowRight: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="12 5 19 12 12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        // Check
        check: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        // Star
        star: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        // Code
        code: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="16 18 22 12 16 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="8 6 2 12 8 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        // Lightbulb
        lightbulb: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18h6M10 22h4M15 8a3 3 0 1 0-6 0c0 2 3 3 3 5v1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="8" r="5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        // Heart
        heart: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        // Sparkles
        sparkles: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 12l.75 2.25L22 15l-2.25.75L19 18l-.75-2.25L16 15l2.25-.75L19 12z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    };

    return (
        <span
            className={`notion-icon notion-icon-svg ${sizeClasses[size]} ${animationClass} ${className}`}
            style={{ color }}
            onClick={onClick}
            role={onClick ? "button" : "img"}
            aria-label={`Icon: ${icon}`}
        >
            {svgIcons[icon] || svgIcons.document}
        </span>
    );
};

export default NotionIcon;

// Preset Icon Components for common use cases
export const DocumentIcon = (props) => <NotionIcon type="svg" icon="document" {...props} />;
export const FolderIcon = (props) => <NotionIcon type="svg" icon="folder" {...props} />;
export const LinkIcon = (props) => <NotionIcon type="svg" icon="link" {...props} />;
export const CheckIcon = (props) => <NotionIcon type="svg" icon="check" {...props} />;
export const StarIcon = (props) => <NotionIcon type="svg" icon="star" {...props} />;
export const CodeIcon = (props) => <NotionIcon type="svg" icon="code" {...props} />;
export const LightbulbIcon = (props) => <NotionIcon type="svg" icon="lightbulb" {...props} />;
export const HeartIcon = (props) => <NotionIcon type="svg" icon="heart" {...props} />;
export const SparklesIcon = (props) => <NotionIcon type="svg" icon="sparkles" {...props} />;
