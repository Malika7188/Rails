import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Dashboard({ locations }) {
  useEffect(() => {
    const map = L.map('map').setView([0.02, 34.75], 13); // Example: Kisumu center

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    locations.forEach(loc => {
      L.marker([loc.latitude, loc.longitude])
        .addTo(map)
        .bindPopup(loc.name);
    });

    return () => map.remove(); // clean up
  }, [locations]);

  return (
    <div style={{ height: '500px', width: '100%' }} id="map" />
  );
}
