// app/javascript/application.js
import '@hotwired/turbo-rails'
import * as ActiveStorage from '@rails/activestorage'
import 'controllers'
import '../stylesheets/tailwind.css'

// Leaflet initialization
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
})

// Initialize Inertia
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  resolve: name => import(`./components/${name}.jsx`),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  }
})

ActiveStorage.start()