// app/javascript/pages/HomePage.jsx
import React from 'react';
import { Head } from '@inertiajs/react';
import Map from '@/Components/Map'; // Adjust path if needed

export default function HomePage({ locations }) {
  return (
    <div>
      <h1>User Locations Map</h1>
      <div style={{ height: '500px', width: '100%' }}>
        <Map locations={locations} />
      </div>
    </div>
  );
}