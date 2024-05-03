import React, { useState } from "react"
import { useLoaderData } from "react-router-dom"
import WidgetDetails from "../Widget/WidgetDetails"
import SearchBar from "../SearchBar/SearchBar"

export default function PageRealTime() {
  const [location, setLocation] = useState('here')
  const data = useLoaderData()
  // Function to handle location change
  const handleLocationChange = (newLocation) => {
    setLocation(newLocation)
  }
  return (
    <>
      <SearchBar onLocationChange={handleLocationChange} /> {/* Pass callback function */}
      <h1>Your Searched Data</h1>
      <div>
        <WidgetDetails location={location} />
      </div>
      <h1>Your Local Data</h1>
      <div>
        <WidgetDetails location={'here'} />
      </div>
    </>
  )
}