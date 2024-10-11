/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-', // 모든 클래스에 'tw-' 접두사 추가
  content: [
    './src/main/resources/templates/**/*.html',  // 모든 HTML 파일 경로 추가
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
