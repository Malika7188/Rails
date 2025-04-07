// app/javascript/packs/application.jsx
import '@hotwired/turbo-rails'
import * as ActiveStorage from '@rails/activestorage'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

// Leaflet configuration
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
})

// Initialize Inertia
createInertiaApp({
  resolve: name => import(`../components/${name}.jsx`),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  }
})

ActiveStorage.start()