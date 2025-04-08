// app/javascript/entrypoints/application.jsx
import '@hotwired/turbo-rails'
import * as ActiveStorage from '@rails/activestorage'
import '../controllers'

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

// Leaflet CSS and icon fixes
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});
createInertiaApp({
  resolve: name => import(`../components/${name}.jsx`),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  }
})

ActiveStorage.start()