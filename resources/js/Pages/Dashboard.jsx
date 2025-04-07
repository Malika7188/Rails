import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Dashboard({ locations }) {
  useEffect(() => {
    const map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    locations.forEach(loc => {
      if (loc.latitude && loc.longitude) {
        L.marker([loc.latitude, loc.longitude])
          .addTo(map)
          .bindPopup(loc.name || 'Unnamed Location');
      }
    });
  }, [locations]);

  return (
    <>
      <Head title="Dashboard" />
      <h1>Dashboard</h1>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </>
  );
}
