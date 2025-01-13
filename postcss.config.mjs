/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        tailwindcss: {},
        'postcss-focus-visible': {
            replaceWith: '[data-focus-visible-added]',
        },
        autoprefixer: {},
    },
};

export default config;
