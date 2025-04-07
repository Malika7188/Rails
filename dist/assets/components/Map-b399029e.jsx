// app/javascript/components/Map.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/assets/marker-icon-2x.png',
  iconUrl: '/assets/marker-icon.png',
  shadowUrl: '/assets/marker-shadow.png'
})

const Map = ({ locations }) => {
  console.log('Received locations:', locations); // Add this
  // Filter out invalid locations
  const validLocations = locations?.filter(l => 
    typeof l.latitude === 'number' && 
    typeof l.longitude === 'number'
  ) || [];

  // Set center and zoom based on valid data
  const center = validLocations[0] || [51.505, -0.09]; // London fallback
  const zoom = validLocations.length ? 10 : 3;

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      {validLocations.map((location) => (
        <Marker 
          key={location.id} 
          position={[location.latitude, location.longitude]}
        >
          <Popup>
            <strong>{location.name}</strong><br />
            Lat: {location.latitude.toFixed(4)}, Lng: {location.longitude.toFixed(4)}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;