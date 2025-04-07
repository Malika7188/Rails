# config/initializers/assets.rb

# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = "1.0"

# Add additional assets to the asset load path.
Rails.application.config.assets.paths << Rails.root.join("app/javascript")
Rails.application.config.assets.paths << Rails.root.join("node_modules")

# Add React JSX support
Rails.application.config.assets.configure do |env|
  env.register_mime_type('application/jsx', extensions: ['.jsx'])
  env.register_transformer('application/jsx', 'application/javascript', 
    ->(input) { JSX.transform(input) }
  )
end

# Precompile additional assets
Rails.application.config.assets.precompile += %w(
  application.jsx
  components/*
  leaflet/dist/images/*
)