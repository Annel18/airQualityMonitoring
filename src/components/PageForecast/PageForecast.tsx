import React, { useState, useEffect } from "react"
import { getCityFeed } from '../../utils/loaders/getCityFeed'

const PageForeCast: React.FC = () => {
  const [data, setData] = useState<any>(null)
  const location = 'here'

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getCityFeed(location)
        setData(res)
      } catch (error) {
        console.error('Error fetching city feed:', error)
      }
    }
    fetchData()
  }, [location])

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>Forecast DATA</h1>
      <h2>{data.data.city.name}</h2>
      <div style={{ display: 'flex' }}>
        {data.data.forecast.daily.o3.map((dayData: any, index: number) => (
          <div key={index} style={{ padding: '1rem' }}>
            <h3>{dayData.day}</h3>
            <p>O3: {dayData.avg ? `${dayData.avg} aqi` : 'n/a'}</p>
            <p>pm10: {data.data.forecast.daily.pm10[index]?.avg ? `${data.data.forecast.daily.pm10[index].avg} aqi` : 'n/a'}</p>
            <p>pm25: {data.data.forecast.daily.pm25[index]?.avg ? `${data.data.forecast.daily.pm25[index].avg} aqi` : 'n/a'}</p>
            <p>UVI: {data.data.forecast.daily.uvi[index]?.avg ? `${data.data.forecast.daily.uvi[index].avg} aqi` : 'n/a'}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default PageForeCast
