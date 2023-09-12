/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "rainbow-gradient":
                    "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
            },
            spacing: {
                0: "0rem",
            },
            keyframes: {
                "breathing-gradient": {
                    "0%, 100%": {
                        "background-size": "400% 400%",
                        "background-position": "0% 50%;",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "100% 50%;",
                    },
                },
                "fade-in": {
                    "0%": { "opacity": 0 },
                    "100%": { "opacity": 1 },
                },
            },
            animation: {
                "breathing-gradient": "breathing-gradient 30s ease infinite",
                "fade-in": "fade-in 1s ease-in-out",
            },
            height: {
                // 128: "32rem",
                // 144: "36rem",
                // 160: "40rem",
                // 176: "44rem",
                192: "48rem",
            },
            colors: {
                transparent: "transparent",
            },
        },
    },
    plugins: [],
};
