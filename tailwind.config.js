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
        danger: {
          100: '#fee2e2',
          600: '#dc2626',
          700: '#b91c1c'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}