/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: ["class", '[data-theme="dark"]'],
    theme: {
        extend: {
            colors: {
                // Light mode colors
                primary: "var(--primary-color)",
                secondary: "var(--secondary-color)",
                tertiary: "var(--tertiary-color)",
                quaternary: "var(--quaternary-color)",
                "bg-primary": "var(--background-primary)",
                "bg-secondary": "var(--background-secondary)",
                "bg-tertiary": "var(--background-tertiary)",
                link: "var(--link-color)",
                "accent-blue": "var(--accent-blue)",
                "accent-purple": "var(--accent-purple)",
                "accent-pink": "var(--accent-pink)",
                "accent-red": "var(--accent-red)",
                "accent-orange": "var(--accent-orange)",
                "accent-yellow": "var(--accent-yellow)",
                "accent-green": "var(--accent-green)",
                border: "var(--border-color)",
                hover: "var(--hover-bg)",
                "button-bg": "var(--button-bg)",
                "button-text": "var(--button-text)",
            },
            fontFamily: {
                primary: "var(--primary-font)",
                secondary: "var(--secondary-font)",
                mono: "var(--mono-font)",
            },
            spacing: {
                xs: "var(--spacing-xs)",
                sm: "var(--spacing-sm)",
                md: "var(--spacing-md)",
                lg: "var(--spacing-lg)",
                xl: "var(--spacing-xl)",
                "2xl": "var(--spacing-2xl)",
                "3xl": "var(--spacing-3xl)",
            },
            borderRadius: {
                sm: "var(--radius-sm)",
                md: "var(--radius-md)",
                lg: "var(--radius-lg)",
                xl: "var(--radius-xl)",
            },
            boxShadow: {
                sm: "var(--shadow-sm)",
                md: "var(--shadow-md)",
                lg: "var(--shadow-lg)",
            },
            transitionDuration: {
                fast: "150ms",
                base: "250ms",
                slow: "350ms",
            },
            transitionTimingFunction: {
                smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
            },
            keyframes: {
                slideDown: {
                    from: {
                        opacity: "0",
                        transform: "translateY(-10px)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
            },
            animation: {
                slideDown: "slideDown 0.4s ease-out",
            },
        },
    },
    plugins: [],
};
