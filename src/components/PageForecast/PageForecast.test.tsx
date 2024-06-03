import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { getCityFeed as mockGetCityFeed } from '../../utils/loaders/getCityFeed'
import PageForeCast from './index'

jest.mock('../../utils/loaders/getCityFeed')

describe('PageForecast component', () => {
  test('handles null data for missing forecast values', async () => {
    const mockData = {
      data: {
        city: {
          name: 'Test City',
        },
        forecast: {
          daily: {
            o3: [{ day: 'Monday', avg: null }], // Simulating missing value
            pm10: [{ avg: null }], // Simulating missing value
            pm25: [{ avg: null }], // Simulating missing value
            uvi: [{ avg: null }], // Simulating missing value
          },
        },
      },
    };

    (mockGetCityFeed as jest.Mock).mockResolvedValueOnce(mockData) // Simulate data fetching

    const { getByText } = render(<PageForeCast />)

    await waitFor(() => {
      expect(getByText('Forecast DATA')).toBeInTheDocument()
      expect(getByText('Test City')).toBeInTheDocument()
      expect(getByText('Monday')).toBeInTheDocument()
      expect(getByText('O3: n/a')).toBeInTheDocument() // Check for "n/a" instead of specific text
      expect(getByText('pm10: n/a')).toBeInTheDocument() // Check for "n/a" instead of specific text
      expect(getByText('pm25: n/a')).toBeInTheDocument() // Check for "n/a" instead of specific text
      expect(getByText('UVI: n/a')).toBeInTheDocument() // Check for "n/a" instead of specific text
    })
  })
})
