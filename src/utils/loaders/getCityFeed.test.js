import { getCityFeed } from './getCityFeed'

describe('getCityFeed function', () => {
  // Mocking fetch
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ mockData: 'mockValue' }),
    })
  )

  beforeEach(() => {
    fetch.mockClear()
  })

  it('should call fetch with the correct URL', async () => {
    const token = 'mockToken'
    const expectedURL = `https://api.waqi.info/feed/here/?token=${token}`
    await getCityFeed(token)
    expect(fetch).toHaveBeenCalledWith(expectedURL)
  })

  it('should return JSON data from the response', async () => {
    const token = 'mockToken'
    const result = await getCityFeed(token)
    expect(result).toEqual({ mockData: 'mockValue' })
  })
})
