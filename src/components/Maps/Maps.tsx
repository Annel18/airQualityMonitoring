import React, { useEffect, useState } from 'react'
import { getCityFeed } from '../../utils/loaders/getCityFeed'
import { initializeMap } from '../../utils/externalScripts/initializeMap'

interface Props {
  id: string
  location: string
}

const Maps: React.FC<Props> = ({ id, location }) => {
  const token = process.env.API_KEY as string
  const [data, setData] = useState<any>(null)

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
      const map = initializeMap({
        elementId: id,
        center: [data.data.city.geo[0], data.data.city.geo[1]],
        zoom: 11,
        token: token,
      })

      return () => {
        map.remove()
      }
    }
  }, [data, id, token])

  return <div id={id} data-testid='maptest' style={{ height: '100%', width: '100%' }} />
}

export default Maps
