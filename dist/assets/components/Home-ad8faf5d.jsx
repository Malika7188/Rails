// app/javascript/components/Home.jsx
import React from 'react';
import { Head } from '@inertiajs/react';
import Map from './Map';

// Temporary test data
const testLocations = [
  { id: 1, name: "London", latitude: 51.5074, longitude: -0.1278 },
  { id: 2, name: "Paris", latitude: 48.8566, longitude: 2.3522 }
];

export default function Home({ locations }) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f4f8' }}>
      <Head title="User Locations Map" />
      
      {/* Header */}
      <div style={{ padding: '20px', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#2d3748' }}>User Locations</h1>
      </div>

      {/* Map Container */}
      <div style={{ 
        height: 'calc(100vh - 80px)',
        width: '100%', 
        position: 'relative', 
        zIndex: 0 
      }}>
        {/* Use test data instead of prop */}
        <Map locations={testLocations} /> {/* Changed this line */}
      </div>
    </div>
  );
}