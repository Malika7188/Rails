const { environment } = require('@rails/webpacker');

// Add this for CSS support
environment.loaders.append('css', {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
});

module.exports = environment;