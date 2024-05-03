import React, { useEffect, useState } from "react"
import { loadExternalScript } from '../../utils/loaders/loadExternalScript'
import { getCityFeed } from '../../utils/loaders/getCityFeed'

function cleanCityName(name) {
  return name.toLowerCase().replace(/\s/g, '').replace('-', '');
}

export default function WidgetDetails({ location }) {
  const [data, setData] = useState(null)
  const [cityDisplay, setCityDisplay] = useState('')

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

  useEffect(() => {
    if (data) {
      const cityName = cleanCityName(data.data.city.name);
      setCityDisplay(data.data.city.name)
      loadExternalScript(window, document, 'script', '_aqiFeed')
      _aqiFeed({
        container: "city-aqi-container-detailed",
        city: cityName,
        lang: "en",
        callback: function(aqi) {
          const longHtmlSnippet = aqi.details
            .replaceAll(`overflow:hidden`, ``)
            .replaceAll(`<div style='width:28px'`, `<div style='width:60pxtext-align:rightpadding-right:5px'`)
            .replaceAll(`width:180px`, `width:210px`)
          document.getElementById('city-aqi-container-detailed').innerHTML = longHtmlSnippet
        }
      })
    }
  }, [data])

  return (
    <>
      {data && (
        <>
          <h2>{cityDisplay}</h2>
          <span id="city-aqi-container-detailed" data-testid="city-aqi-container-detailed"></span>
        </>
      )}
    </>
  )
}