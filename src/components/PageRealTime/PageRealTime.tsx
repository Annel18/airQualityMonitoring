import React, { useState } from "react";
// import WidgetDetails from "../Widget/WidgetDetails";
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
        {/* <h1>Your Searched Data</h1> */}
        {/* <div>
        <WidgetDetails key={searchedLocation} location={searchedLocation} />
      </div> */}
        {/* <h1>Your Local Data</h1>
      <div>
        <WidgetDetails key={'here'} location={'here'} />
      </div> */}
      </div>
    </>
  )
}

export default PageRealTime;
