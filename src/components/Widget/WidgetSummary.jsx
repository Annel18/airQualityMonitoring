import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"

import loadExternalScript from '../../utils/loaders/loadExternalScript.js'

export default function WidgetSummary() {
  const data = useLoaderData()

  useEffect(() => {
    loadExternalScript(window, document, 'script', '_aqiFeed')
    _aqiFeed({ 
      container: "city-aqi-container-summary", 
      city: data.data.city.name,
      lang:"en",
      display:`
      <div style='%style;max-width:180px;text-align:center;'>
        <small>%cityname AQI:</small> 
        <div style='font-size:88px;padding-top:30px;'>%aqiv</div> 
        %impact
      </div>`,  
    })
  }, [data.data.city])
  

  return (
    <>
      <span id="city-aqi-container-summary"></span>
    </>
  );
}