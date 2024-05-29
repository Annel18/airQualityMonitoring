// function given by the API documentation
// https://aqicn.org/faq/2015-09-18/map-web-service-real-time-air-quality-tile-api/

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface InitializeMapOptions {
  elementId: string
  center: [number, number]
  zoom: number
  token: string
}

export const initializeMap = ({ elementId, center, zoom }: InitializeMapOptions): L.Map => {
  const token = process.env.API_KEY
  const map = L.map(elementId).setView(center, zoom)

  const OSM_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  const OSM_ATTRIB = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  const osmLayer = L.tileLayer(OSM_URL, { attribution: OSM_ATTRIB })

  const WAQI_URL = `https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=${token}`
  const WAQI_ATTR = 'Air Quality Tiles &copy; <a href="http://waqi.info">waqi.info</a>'
  const waqiLayer = L.tileLayer(WAQI_URL, { attribution: WAQI_ATTR })

  map.addLayer(osmLayer).addLayer(waqiLayer)

  return map
}
