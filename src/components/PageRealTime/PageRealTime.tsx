import React, { useEffect, useState } from "react";
// import SearchBar from "../SearchBar/SearchBar";
// import DataRealTime from "../DataRealTime/DataRealTime";
import { getHemisphereN, getHemisphereS } from "../../utils/loaders/getMapQueries"
import { getCityFeedId } from '../../utils/loaders/getCityFeed';

const PageRealTime: React.FC = () => {
  // const [searchedLocation, setSearchedLocation] = useState('here')
  // const handleSearchedLocationChange = (newLocation: string) => {
  // setSearchedLocation(newLocation)
  // }
  const [dataS, setDataS] = useState<any>(null);
  const [dataN, setDataN] = useState<any>(null);
  const [allData, setAllData] = useState<any[]>([]);
  const stationNbrs: any[] = [];

  useEffect(() => {
    async function fetchHemisphereData() {
      try {
        const [resN, resS] = await Promise.all([getHemisphereN(), getHemisphereS()]);
        setDataN(resN.data);
        setDataS(resS.data);
      } catch (error) {
        console.error('Error fetching world map feed:', error);
      }
    }
    fetchHemisphereData();
  }, []);

  useEffect(() => {
    if (dataN && dataS) {
      const stationIds = [
        ...dataN.map((station: any) => station.uid),
        ...dataS.map((station: any) => station.uid)
      ];
      stationNbrs.push(...stationIds);

      async function fetchCityFeeds() {
        try {
          const cityFeeds = await Promise.all(stationNbrs.map(station => getCityFeedId(station)));
          setAllData(cityFeeds.map(feed => feed.data));
        } catch (error) {
          console.error('Error fetching city feed:', error);
        }
      }
      fetchCityFeeds();
    }
  }, [dataN, dataS]);

  if (!dataN || !dataS) {
    return <div>Loading...</div>;
  }

  console.log('stationNbrs', stationNbrs);
  console.log('allData', allData);

  return (
    <>
      {/* <SearchBar onLocationChange={handleSearchedLocationChange} /> */}
      <div className="page-realtime">
        <div className="map-large">The MAP will come here</div>
        {/* <DataRealTime key={searchedLocation} location={searchedLocation} /> */}
      </div>
      <div className="extremes-realtime">
        {/* <DataRealTime key={'best'} location={''} />
        <DataRealTime key={'worst'} location={''} /> */}
      </div>
    </>
  );
}

export default PageRealTime;
