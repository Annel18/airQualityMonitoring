import axios from 'axios'

export async function getCityFeed() {
  const token = process.env.API_KEY
  const url = process.env.API_URL_LOCAL
  const response = await axios.get(`${url}${token}`)
  return response.data
}
