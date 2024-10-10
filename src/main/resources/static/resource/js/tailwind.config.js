/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/main/resources/templates/**/*.html',  // 타임리프 HTML 파일 경로
        './src/main/resources/static/resource/**/*.js',  // JS 파일 경로
        './src/main/resources/static/resource/**/*.css',  // CSS 파일 경로
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
