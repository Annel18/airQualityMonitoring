import React, { useEffect } from "react"
import { useLoaderData } from "react-router-dom"
import {loadExternalScript} from '../../utils/loaders/loadExternalScript'

export default function WidgetDetails() {
  const data = useLoaderData()

  useEffect(() => {

    loadExternalScript(window, document, 'script', '_aqiFeed')
  
    _aqiFeed({ 
      container: "city-aqi-container-detailed", 
      city: data.data.city.name,
      lang:"en",
      callback: function(aqi) {
        const longHtmlSnippet = aqi.details
          .replaceAll(`overflow:hidden;`,``)
          .replaceAll(`<div style='width:28px;'`,`<div style='width:60px;text-align:right;padding-right:5px'`)
          .replaceAll(`width:180px`,`width:210px`)
        document.getElementById('city-aqi-container-detailed').innerHTML = longHtmlSnippet
      }
    })
  }, [data])
  

  return (
    <>
      <span id="city-aqi-container-detailed" data-testid="city-aqi-container-detailed"></span>
    </>
  )
}