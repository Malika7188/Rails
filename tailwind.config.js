module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'map-pin-blue': '#2563eb',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}