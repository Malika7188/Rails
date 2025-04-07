// app/javascript/entrypoints/application.jsx
import '@hotwired/turbo-rails'
import * as ActiveStorage from '@rails/activestorage'
import '../controllers'

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

// Leaflet CSS and icon fixes
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/vite-dev/assets/marker-icon-2x-7a2d058b.png',
  iconUrl: '/vite-dev/assets/marker-icon-9d89b3a8.png',
  shadowUrl: '/vite-dev/assets/marker-shadow-0c510a80.png'
})

createInertiaApp({
  resolve: name => import(`../components/${name}.jsx`),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  }
})

ActiveStorage.start()