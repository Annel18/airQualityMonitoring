import React, { useState } from "react";
import WidgetDetails from "../Widget/WidgetDetails";
import SearchBar from "../SearchBar/SearchBar";

const PageRealTime: React.FC = () => {
  const [searchedLocation, setSearchedLocation] = useState('')
  const handleSearchedLocationChange = (newLocation: string) => {
    setSearchedLocation(newLocation)
  }

  return (
    <>
      <SearchBar onLocationChange={handleSearchedLocationChange} />
      <h1>Your Searched Data</h1>
      <div>
        <WidgetDetails key={searchedLocation} location={searchedLocation} />
      </div>
      <h1>Your Local Data</h1>
      <div>
        <WidgetDetails key={'here'} location={'here'} />
      </div>
    </>
  )
}

export default PageRealTime;
