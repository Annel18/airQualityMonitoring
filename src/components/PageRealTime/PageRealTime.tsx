import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import DataRealTime from "../DataRealTime/DataRealTime";

const PageRealTime: React.FC = () => {
  const [searchedLocation, setSearchedLocation] = useState('here')
  const handleSearchedLocationChange = (newLocation: string) => {
    setSearchedLocation(newLocation)
  }

  return (
    <>
      <SearchBar onLocationChange={handleSearchedLocationChange} />
      <div className="page-realtime">
        <div className="map-large">The MAP will come here</div>
        <DataRealTime key={searchedLocation} location={searchedLocation} />
      </div>
    </>
  )
}

export default PageRealTime;
