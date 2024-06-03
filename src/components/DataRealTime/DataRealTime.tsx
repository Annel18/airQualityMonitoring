import React, { useState, useEffect } from "react";
import { getCityFeed } from '../../utils/loaders/getCityFeed';
import aqiColorKey from "../../assets/data/aqiColorKey";
import { Spin } from 'antd';

interface Props {
  location: string;
}

const DataRealTime: React.FC<Props> = ({ location }) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getCityFeed(location);
        setData(res);
      } catch (error) {
        console.error('Error fetching city feed:', error);
      }
    }
    fetchData();
  }, [location]);

  if (!data) {
    return <div data-testid='loading'><Spin /></div>
  }

  const searchedLocation = data.data.city.name
  const searchedAqi = data.data.aqi
  const iaqiArray = Object.entries(data.data.iaqi)
  const date = new Date(data.data.time.s)
  const updatedTime = `Updated on ${date.toLocaleString()}`
  let searchPollutionLevel: string
  let searchLevelColor: string
  let searchFontColor: string

  if (searchedAqi < 26) {
    searchPollutionLevel = aqiColorKey[0].level.airPollutionLevel;
    searchLevelColor = aqiColorKey[0].backgroundColor;
    searchFontColor = aqiColorKey[0].textColor;
  } else if (searchedAqi < 51) {
    searchPollutionLevel = aqiColorKey[1].level.airPollutionLevel;
    searchLevelColor = aqiColorKey[1].backgroundColor;
    searchFontColor = aqiColorKey[1].textColor;
  } else if (searchedAqi < 76) {
    searchPollutionLevel = aqiColorKey[2].level.airPollutionLevel;
    searchLevelColor = aqiColorKey[2].backgroundColor;
    searchFontColor = aqiColorKey[2].textColor;
  } else if (searchedAqi < 101) {
    searchPollutionLevel = aqiColorKey[3].level.airPollutionLevel;
    searchLevelColor = aqiColorKey[3].backgroundColor;
    searchFontColor = aqiColorKey[3].textColor;
  } else if (searchedAqi < 126) {
    searchPollutionLevel = aqiColorKey[4].level.airPollutionLevel;
    searchLevelColor = aqiColorKey[4].backgroundColor;
    searchFontColor = aqiColorKey[4].textColor;
  } else if (searchedAqi < 151) {
    searchPollutionLevel = aqiColorKey[5].level.airPollutionLevel;
    searchLevelColor = aqiColorKey[5].backgroundColor;
    searchFontColor = aqiColorKey[5].textColor;
  } else if (searchedAqi < 176) {
    searchPollutionLevel = aqiColorKey[6].level.airPollutionLevel;
    searchLevelColor = aqiColorKey[6].backgroundColor;
    searchFontColor = aqiColorKey[6].textColor;
  } else if (searchedAqi < 201) {
    searchPollutionLevel = aqiColorKey[7].level.airPollutionLevel;
    searchLevelColor = aqiColorKey[7].backgroundColor;
    searchFontColor = aqiColorKey[7].textColor;
  } else if (searchedAqi < 301) {
    searchPollutionLevel = aqiColorKey[8].level.airPollutionLevel;
    searchLevelColor = aqiColorKey[8].backgroundColor;
    searchFontColor = aqiColorKey[8].textColor;
  } else if (searchedAqi < 401) {
    searchPollutionLevel = aqiColorKey[9].level.airPollutionLevel;
    searchLevelColor = aqiColorKey[9].backgroundColor;
    searchFontColor = aqiColorKey[9].textColor;
  } else {
    searchPollutionLevel = aqiColorKey[10].level.airPollutionLevel;
    searchLevelColor = aqiColorKey[10].backgroundColor;
    searchFontColor = aqiColorKey[10].textColor;
  }

  return (
    <>
      <div>
        <h1><b>{searchedLocation}</b> Air Quality</h1>
        <div className="level-stamp" style={{ backgroundColor: searchLevelColor, color: searchFontColor }}>
          <p>{searchedAqi}</p>
          <p>{searchPollutionLevel}</p>
        </div>
        <p>{updatedTime}</p>
        <table className="polluant-table">
          <tbody>
            {iaqiArray.map((polluant: any, index: number) => (
              <tr key={index}>
                <td><b>{polluant[0].toUpperCase()}</b> AQI</td>
                <td>{polluant[1].v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DataRealTime;
