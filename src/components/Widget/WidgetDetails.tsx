import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { loadExternalScript } from '../../utils/loaders/loadExternalScript';

interface CityData {
  data: {
    city: {
      name: string;
    };
  };
}

declare global {
  interface Window {
    _aqiFeed: (options: AqiFeedOptions) => void;
  }
}

interface AqiFeedOptions {
  container: string;
  city: string;
  lang: string;
  callback: (aqi: any) => void;
}

export default function WidgetDetails() {
  const data = useLoaderData() as CityData;

  useEffect(() => {
    if (data && data.data && data.data.city && data.data.city.name) {
      loadExternalScript(window, document, 'script', '_aqiFeed');
  
      if (typeof window._aqiFeed === 'function') {
        window._aqiFeed({ 
          container: "city-aqi-container-detailed", 
          city: data.data.city.name,
          lang: "en",
          callback: function(aqi) {
            const longHtmlSnippet = aqi.details
              .replaceAll('overflow:hidden;', '')
              .replaceAll('<div style=\'width:28px;\'','<div style=\'width:60px;text-align:right;padding-right:5px\'')
              .replaceAll('width:180px','width:210px');
            const container = document.getElementById('city-aqi-container-detailed');
            if (container) {
              container.innerHTML = longHtmlSnippet;
            }
          }
        });
      }
    }
  }, [data]);

  return (
    <span id="city-aqi-container-detailed" data-testid="city-aqi-container-detailed"></span>
  );
}
