import axios from 'axios'
import { getCityFeed } from './getCityFeed'

jest.mock('axios')

describe('getCityFeed function', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call axios.get with the correct URL', async () => {
    const mockData = { mockData: 'mockValue' }
    axios.get.mockResolvedValueOnce({ data: mockData })
    await getCityFeed()
    expect(axios.get).toHaveBeenCalledWith(process.env.API_URL_LOCAL + process.env.API_KEY)
  })

  it('should return data from the response', async () => {
    const mockData = { mockData: 'mockValue' }
    axios.get.mockResolvedValueOnce({ data: mockData })
    const result = await getCityFeed()
    expect(result).toEqual(mockData)
  })

  it('should return correct status and attributions', async () => {
    const responseData = {
      status: 'ok',
      data: {
        attributions: [
          {
            url: 'https://waqi.info/',
            name: 'World Air Quality Index Project',
          },
        ],
      },
    }
    axios.get.mockResolvedValueOnce({ data: responseData })
    const result = await getCityFeed()

    expect(result.status).toEqual('ok')
    expect(result.data.attributions).toContainEqual({
      name: 'World Air Quality Index Project',
      url: 'https://waqi.info/'
    })
  })

  it('should throw an error if axios.get fails', async () => {
    const errorMessage = 'Network Error'
    axios.get.mockRejectedValueOnce(new Error(errorMessage))
    await expect(getCityFeed()).rejects.toThrow(errorMessage)
  })
})
