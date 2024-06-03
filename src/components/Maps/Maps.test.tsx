import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { getCityFeed as mockGetCityFeed } from '../../utils/loaders/getCityFeed'
import { initializeMap as mockInitializeMap } from '../../utils/externalScripts/initializeMap'
import Maps from './Maps'

jest.mock('../../utils/loaders/getCityFeed')
jest.mock('../../utils/externalScripts/initializeMap')

describe('Maps component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('fetches data and initializes map', async () => {
    const mockData = {
      data: {
        city: {
          geo: [51.505, -0.09],
        },
      },
    };

    (mockGetCityFeed as jest.Mock).mockResolvedValueOnce(mockData)
    const mockMapInstance = { remove: jest.fn() };
    (mockInitializeMap as jest.Mock).mockReturnValue(mockMapInstance)

    const { getByTestId } = render(<Maps id="test-map" location="test-location" />)

    await waitFor(() => {
      expect(mockGetCityFeed).toHaveBeenCalledWith('test-location')
      expect(mockInitializeMap).toHaveBeenCalledWith({
        elementId: 'test-map',
        center: [51.505, -0.09],
        zoom: 11,
        token: process.env.API_KEY,
      })
    })

    expect(getByTestId('maptest')).toBeInTheDocument()
  })

  test('handles error in data fetching', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    (mockGetCityFeed as jest.Mock).mockRejectedValueOnce(new Error('Fetch error'))

    const { getByTestId } = render(<Maps id="test-map" location="test-location" />)

    await waitFor(() => {
      expect(mockGetCityFeed).toHaveBeenCalledWith('test-location')
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching city feed:', expect.any(Error))
    })

    expect(getByTestId('maptest')).toBeInTheDocument()
    consoleErrorSpy.mockRestore()
  })
})
