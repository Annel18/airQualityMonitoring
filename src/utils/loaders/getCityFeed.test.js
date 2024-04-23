import axios from 'axios'
import { getCityFeed } from './getCityFeed'

jest.mock('axios')

describe('getCityFeed function', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call axios.get with the correct URL', async () => {
    const url = 'mockURL'
    const mockData = { mockData: 'mockValue' }
    axios.get.mockResolvedValueOnce({ data: mockData })
    await getCityFeed(url)
    expect(axios.get).toHaveBeenCalledWith(url)
  })

  it('should return data from the response', async () => {
    const url = 'mockURL'
    const mockData = { mockData: 'mockValue' }
    axios.get.mockResolvedValueOnce({ data: mockData })
    const result = await getCityFeed(url)
    expect(result).toEqual(mockData)
  })

  it('should return correct status and attributions', async () => {
    const url = 'mockURL'
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
    const result = await getCityFeed(url)

    expect(result.status).toEqual('ok')
    expect(result.data.attributions).toContainEqual({
      name: 'World Air Quality Index Project',
      url: 'https://waqi.info/'
    })
  })

  it('should throw an error if axios.get fails', async () => {
    const url = 'mockURL'
    const errorMessage = 'Network Error'
    axios.get.mockRejectedValueOnce(new Error(errorMessage))
    await expect(getCityFeed(url)).rejects.toThrow(errorMessage)
  })
})
