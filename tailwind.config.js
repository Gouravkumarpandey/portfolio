/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: ["class", '[data-theme="dark"]'],
    theme: {
        extend: {
            colors: {
                // Clean professional colors
                primary: "#111111",
                secondary: "#6b7280",
                tertiary: "#9ca3af",
                quaternary: "#e5e7eb",
                "bg-primary": "#ffffff",
                "bg-secondary": "#f9fafb",
                "bg-tertiary": "#f5f5f5",
                link: "#111111",
                "accent-blue": "#3b82f6",
                "accent-purple": "#8b5cf6",
                "accent-pink": "#ec4899",
                "accent-red": "#ef4444",
                "accent-orange": "#f59e0b",
                "accent-yellow": "#eab308",
                "accent-green": "#10b981",
                border: "#e5e7eb",
                hover: "#f5f5f5",
                "button-bg": "#111111",
                "button-text": "#ffffff",
            },
            fontFamily: {
                primary: [
                    "Inter",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Helvetica",
                    "Arial",
                    "sans-serif",
                ],
                secondary: [
                    "Inter",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Helvetica",
                    "Arial",
                    "sans-serif",
                ],
                mono: ["JetBrains Mono", "Courier New", "monospace"],
            },
            fontSize: {
                // Professional typography scale
                title: ["48px", { lineHeight: "1.2", fontWeight: "600" }],
                "section-heading": ["26px", { lineHeight: "1.3", fontWeight: "600" }],
                "sub-heading": ["22px", { lineHeight: "1.4", fontWeight: "600" }],
                body: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
                "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
                "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
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
