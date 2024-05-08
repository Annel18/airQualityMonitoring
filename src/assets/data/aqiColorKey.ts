import airQualityLevels from "./airQualityLevels"

const aqiColorKey = [
  { aqi: '0 - 25', backgroundColor: '#00787d', textColor:'white', level: airQualityLevels[0] },
  { aqi: '25 - 50', backgroundColor: '#009b67', textColor:'white', level: airQualityLevels[0] },
  { aqi: '50 - 75', backgroundColor: '#7fbe54', textColor:'black', level: airQualityLevels[1] },
  { aqi: '75 - 100', backgroundColor: '#ffde4c', textColor:'black', level: airQualityLevels[1] },
  { aqi: '100 - 125', backgroundColor: '#ffbb46', textColor:'black', level: airQualityLevels[2] },
  { aqi: '125 - 150', backgroundColor: '#ff9643', textColor:'black', level: airQualityLevels[2] },
  { aqi: '150 - 175', backgroundColor: '#eb4a3b', textColor:'white', level: airQualityLevels[3] },
  { aqi: '175 - 200', backgroundColor: '#d1003a', textColor:'white', level: airQualityLevels[3] },
  { aqi: '200 - 300', backgroundColor: '#9c0067', textColor:'white', level: airQualityLevels[4] },
  { aqi: '300 - 400', backgroundColor: '#7c003f', textColor:'white', level: airQualityLevels[5] },
  { aqi: '>400', backgroundColor: '#510017', textColor:'white', level: airQualityLevels[5] },
]

export default aqiColorKey