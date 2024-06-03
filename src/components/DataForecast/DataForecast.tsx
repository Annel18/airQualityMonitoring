import React, { useState, useEffect } from "react"
import { getCityFeed } from '../../utils/loaders/getCityFeed'
import { Spin } from 'antd';

interface Props {
  location: string;
}

const DataForecast: React.FC<Props> = ({ location }) => {
  const [data, setData] = useState<any>()

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
    return <div data-testid='loading'><Spin /></div>
  }

  return (
    <>
      <h3>{data.data.city.name}</h3>
      <div style={{ display: 'flex' }}>
        {data.data.forecast.daily.o3.map((dayData: any, index: number) => (
          <div key={index} style={{ padding: '1rem' }}>
            <h3>{dayData.day}</h3>
            <p>O3: {dayData.avg ? `${dayData.avg} aqi` : 'n/a'}</p>
            <p>pm10: {(data.data.forecast.daily.pm10 && data.data.forecast.daily.pm10[index]) ? `${data.data.forecast.daily.pm10[index].avg} aqi` : 'n/a'}</p>
            <p>pm25: {(data.data.forecast.daily.pm25 && data.data.forecast.daily.pm25[index]) ? `${data.data.forecast.daily.pm25[index].avg} aqi` : 'n/a'}</p>
            <p>UVI: {(data.data.forecast.daily.uvi && data.data.forecast.daily.uvi[index]) ? `${data.data.forecast.daily.uvi[index].avg}` : 'n/a'}</p>
          </div>
        ))}
      </div>
    </>
  )
}
export default DataForecast