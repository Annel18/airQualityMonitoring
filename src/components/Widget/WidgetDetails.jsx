import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"

import loadExternalScript from '../../utils/loaders/loadExternalScript.js'

export default function WidgetDetails() {
  const data = useLoaderData()

  useEffect(() => {

    loadExternalScript(window, document, 'script', '_aqiFeed')
  
    _aqiFeed({ 
      container: "city-aqi-container-detailed", 
      city: data.data.city.name,
      lang:"en",
      display:"%details",  
      // callback:function(aqi){console.log(aqi)}
    })
  }, [data.data.city])
  

  return (
    <>
      <span id="city-aqi-container-detailed"></span>
    </>
  );
}