import axios from 'axios'

export async function getCityFeed(location) {
  const token = process.env.API_KEY
  const url = process.env.API_URL_LOCAL
  const response = await axios.get(`https://api.waqi.info/feed/${location}/?token=${token}`)
  return response.data
}
