import type {Config} from "tailwindcss";

import generated from "@tailwindcss/typography";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'media',
    theme: {
        extend: {
            spacing: {
                18: '4.5rem',
                112: '28rem',
                120: '30rem',
            },
        },
    },
    plugins: [
        generated,
    ],
} satisfies Config;
