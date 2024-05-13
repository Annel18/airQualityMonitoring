
interface AqiFeedOptions {
  container: string;
  city: string;
  lang: string;
  callback: (aqi: any) => void;
}

declare global {
  interface Window {
    _aqiFeed: (options: AqiFeedOptions) => void;
  }
}
import React, { useEffect, useState } from "react";
import { loadExternalScript } from '../../utils/loaders/loadExternalScript';
import { getCityFeed } from '../../utils/loaders/getCityFeed';

function cleanCityName(name: string): string {
  return name.toLowerCase().replace(/\s/g, '').replace('-', '');
}

interface WidgetDetailsProps {
  location: string;
}

const WidgetDetails: React.FC<WidgetDetailsProps> = ({ location }) => {
  const [data, setData] = useState<any>(null);
  const [cityDisplay, setCityDisplay] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getCityFeed(location);
        setData(res);
      } catch (error) {
        console.error('Error fetching city feed:', error);
      }
    }
    fetchData();
  }, [location]);

  useEffect(() => {
    if (data) {
      const cityName = cleanCityName(data.data.city.name);
      setCityDisplay(data.data.city.name);
      loadExternalScript(window, document, 'script', '_aqiFeed');
      window._aqiFeed({
        container: "city-aqi-container-detailed",
        city: cityName,
        lang: "en",
        callback: function(aqi: any) {
          const longHtmlSnippet = aqi.details
            .replaceAll(`overflow:hidden;`, ``)
            .replaceAll(`<div style='width:28px;'`, `<div style='width:60px;text-align:right;padding-right:5px'`)
            .replaceAll(`width:180px`, `width:210px`);
          const container = document.getElementById('city-aqi-container-detailed');
          if (container) {
            container.innerHTML = longHtmlSnippet;
          }
        }
      });
    }
  }, [data]);

  return (
    <>
      {data && (
        <>
          <h2>{cityDisplay}</h2>
          <span id="city-aqi-container-detailed" data-testid="city-aqi-container-detailed"></span>
        </>
      )}
    </>
  );
};

export default WidgetDetails;
