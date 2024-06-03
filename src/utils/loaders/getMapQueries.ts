import axios from 'axios'

export async function getMapQueries(lat1:number,lng1:number,lat2:number,lng2:number) {
  const token = process.env.API_KEY
  // const url = process.env.API_URL_LOCAL
  const response = await axios.get(`https://api.waqi.info/map/bounds?token=${token}&latlng=${lat1},${lng1},${lat2},${lng2}`)
  return response.data
}

export async function getHemisphereN() {
  const token = process.env.API_KEY
  // const url = process.env.API_URL_LOCAL
  const response = await axios.get(`https://api.waqi.info/map/bounds?token=${token}&latlng=0,-180,90,180`)
  return response.data
}

export async function getHemisphereS() {
  const token = process.env.API_KEY
  // const url = process.env.API_URL_LOCAL
  const response = await axios.get(`https://api.waqi.info/map/bounds?token=${token}&latlng=0,-180,-90,180`)
  return response.data
}