import React, { useEffect, useState } from "react"
import { loadExternalScript } from '../../utils/loaders/loadExternalScript'
import { getCityFeed } from '../../utils/loaders/getCityFeed'

export default function WidgetDetails({ location }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getCityFeed(location)
        console.log('City feed data:', res) // Log the received data
        setData(res) // Update the state with the received data
      } catch (error) {
        console.error('Error fetching city feed:', error)
      }
    }
    fetchData()
  }, [location])

  useEffect(() => {
    if (data) {
      console.log('Updating widget with data:', data)
      loadExternalScript(window, document, 'script', '_aqiFeed')
      _aqiFeed({
        container: "city-aqi-container-detailed",
        city: data.data.city.name.toLowerCase().replace(' ', '').replace('-', ''),
        lang: "en",
        callback: function(aqi) {
          console.log('Widget callback data:', aqi)
          const longHtmlSnippet = aqi.details
            .replaceAll(`overflow:hidden`, ``)
            .replaceAll(`<div style='width:28px'`, `<div style='width:60pxtext-align:rightpadding-right:5px'`)
            .replaceAll(`width:180px`, `width:210px`)
          document.getElementById('city-aqi-container-detailed').innerHTML = longHtmlSnippet
        }
      })
    }
  }, [data])

  // useEffect(() => {
  //   console.log('Location prop changed:', location)
  // }, [location])

  return (
    <>
      <span id="city-aqi-container-detailed" data-testid="city-aqi-container-detailed"></span>
    </>
  )
}