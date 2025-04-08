import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Head } from '@inertiajs/inertia-react';

// Fix for marker icons in React Leaflet
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function Dashboard({ locations }) {
  console.log('Locations data:', locations);

  const defaultPosition = [1.2921, 36.8219]; // Kenya coordinates
  
  return (
    <>
      <Head title="Dashboard" />
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold mb-4">Location Map</h1>
          
          {/* This is the critical map container div */}
          <div style={{ 
            height: '400px', 
            width: '100%', 
            borderRadius: '0.375rem', 
            overflow: 'hidden',
            position: 'relative', // Add this
            zIndex: 0 // Add this
          }}>
            <MapContainer 
              center={defaultPosition} 
              zoom={7} 
              style={{ height: '100%', width: '100%' }}
              whenCreated={(map) => console.log('Map initialized:', map)}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              
              {locations?.map((location) => (
                <Marker 
                  key={location.id}
                  position={[location.latitude, location.longitude]}
                >
                  <Popup>
                    <strong>{location.name}</strong><br />
                    {location.user_email && `Added by: ${location.user_email}`}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Rest of your component */}
        </div>
      </div>
    </>
  );
}