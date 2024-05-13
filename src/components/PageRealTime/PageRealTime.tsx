import React, { useState } from "react";
import WidgetDetails from "../Widget/WidgetDetails";
import SearchBar from "../SearchBar/SearchBar";

const PageRealTime: React.FC = () => {
  const [location, setLocation] = useState('here');

  // Function to handle location change
  const handleLocationChange = (newLocation: string) => {
    setLocation(newLocation);
  };

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
  );
};

export default PageRealTime;
