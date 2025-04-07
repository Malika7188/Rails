import React, { useEffect } from 'react'
import L from 'leaflet'

const Map = ({ locations = [] }) => {
  useEffect(() => {
    const map = L.map('map').setView([0.02, 37.9062], 6) // Center of Kenya

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    locations.forEach(({ name, latitude, longitude }) => {
      const marker = L.marker([latitude, longitude]).addTo(map)
      marker.bindPopup(`<b>${name}</b>`)
    })

    return () => {
      map.remove()
    }
  }, [locations])

  return (
    <div id="map" className="w-full h-[500px] rounded-lg shadow-md border border-gray-300" />
  )
}

export default Map
