/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.vue"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
}
