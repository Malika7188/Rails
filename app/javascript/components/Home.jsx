import React from 'react'
import { Head } from '@inertiajs/react'
import Map from './Map'

export default function Dashboard({ locations }) {
  return (
    <>
      <Head title="Dashboard" />
      <div>
        <h1 className="text-2xl font-bold mb-4">User Location Pins</h1>
        <Map locations={locations} />
      </div>
    </>
  )
}
