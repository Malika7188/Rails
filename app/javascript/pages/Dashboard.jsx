import React, { useEffect } from 'react';
import { Head } from '@inertiajs/inertia-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});

export default function Dashboard({ locations }) {
  const [mapReady, setMapReady] = React.useState(false);
  const defaultPosition = [1.2921, 36.8219]; // Default to Kenya coordinates

  useEffect(() => {
    setMapReady(true);
  }, []);

  return (
    <div className="py-6">
      <Head title="Dashboard" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold mb-4">Your Locations Map</h1>
        
        {/* Map Container */}
        <div className="h-[500px] w-full rounded-lg overflow-hidden bg-gray-100">
          {mapReady && (
            <MapContainer 
              center={defaultPosition}
              zoom={7}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              
              {locations?.map(location => (
                <Marker 
                  key={location.id}
                  position={[location.latitude, location.longitude]}
                >
                  <Popup>
                    <div className="text-sm">
                      <h3 className="font-bold">{location.name}</h3>
                      <p>Lat: {location.latitude.toFixed(4)}</p>
                      <p>Lng: {location.longitude.toFixed(4)}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </div>
      </div>
    </div>
  );
}