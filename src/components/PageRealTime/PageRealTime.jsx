import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function PageRealTime() {
  const data = useLoaderData();
  console.log(data.data.city)

  useEffect(() => {
    // Define the function to load the external script
    function loadExternalScript(w, d, t, f) {
      w[f] = w[f] || function (c, k, n) {
        var s = w[f];
        k = s['k'] = (s['k'] || (k ? ('&k=' + k) : ''));
        s['c'] = c = (c instanceof Array) ? c : [c];
        s['n'] = n = n || 0;
        var L = d.createElement(t),
          e = d.getElementsByTagName(t)[0];
        L.async = 1;
        L.src = '//feed.aqicn.org/feed/' + (c[n].city) + '/' + (c[n].lang || '') + '/feed.v1.js?n=' + n + k;
        e.parentNode.insertBefore(L, e);
      };
    }

    // Ensure that data.city is defined before calling _aqiFeed
    if (data.data.city && data.data.city.name) {
      // Call the function passing the required arguments
      loadExternalScript(window, document, 'script', '_aqiFeed');

      // Call _aqiFeed function after the script is loaded
      _aqiFeed({ 
        container: "city-aqi-container", 
        city: data.data.city.name,
        display:"%details",  
        lang:"en"   });
    }

  }, [data.city]); // Dependency array includes data.city to ensure the effect re-runs if it changes

  return (
    <>
      <h1>Real Time DATA</h1>
      <h2>DATA status = {data.status}</h2>
      <span id="city-aqi-container"></span>
    </>
  );
}