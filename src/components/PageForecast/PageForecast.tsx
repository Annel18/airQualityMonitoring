import React, { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import DataForecast from "../DataForecast/DataForecast"

const PageForeCast: React.FC = () => {
  const [searchedLocation, setSearchedLocation] = useState('')
  const handleSearchedLocationChange = (newLocation: string) => {
    setSearchedLocation(newLocation)
  }

  return (
    <>
      <h1>Forecast DATA</h1>
      <SearchBar onLocationChange={handleSearchedLocationChange} />
      <h2>Your Searched Data</h2>
      <div>
        <DataForecast key={searchedLocation} location={searchedLocation}/>
      </div>
      <h2>Your Local Data</h2>
      <div>
        <DataForecast key={'here'} location={'here'}/>
      </div>
    </>
  )
}

export default PageForeCast
