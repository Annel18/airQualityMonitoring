import React, { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import DataRealTime from "../DataRealTime/DataRealTime"
import WidgetDetails from "../Widget/WidgetDetails"
import Maps from "../Maps/Maps"

const PageRealTime: React.FC = () => {
  const [searchedLocation, setSearchedLocation] = useState('here')
  const handleSearchedLocationChange = (newLocation: string) => {
    setSearchedLocation(newLocation)
  }

  return (
    <>
      <SearchBar onLocationChange={handleSearchedLocationChange} />
      <div className="page-realtime">
        <div className="map-large">
          <Maps key={`map-${searchedLocation}`} id={`map-${searchedLocation}`} location={searchedLocation} />
        </div>
        <DataRealTime key={searchedLocation} location={searchedLocation} />
      </div>
      {/* <h1>Your Searched Data</h1>
      <div style={{ display: 'flex' }}>
        <Maps key={`map-${searchedLocation}`} id={`map-${searchedLocation}`} location={searchedLocation} />
        <WidgetDetails key={`widget-${searchedLocation}`} location={searchedLocation} />
      </div>
      <h1>Your Local Data</h1>
      <div style={{ display: 'flex' }}>
        <Maps key="map-here" id="map-here" location="here" />
        <WidgetDetails key="widget-here" location="here" />
      </div> */}
    </>
  )
}

export default PageRealTime
