/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: '#121212',
                    surface: '#1E1E1E',
                    accent: '#FF00FF', // Neon Pink
                    text: '#FFFFFF',
                    textMuted: '#A0A0A0'
                },
                light: {
                    bg: '#E6E6FA', // Lavender Mist
                    surface: '#FFFFFF',
                    accent: '#8A2BE2', // BlueViolet/Deep Lavender
                    text: '#1F2937',
                    textMuted: '#4B5563'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
