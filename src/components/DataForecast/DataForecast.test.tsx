import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { getCityFeed as mockGetCityFeed } from '../../utils/loaders/getCityFeed';
import DataForecast from './index';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../utils/loaders/getCityFeed');

describe('DataForecast component', () => {
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

    (mockGetCityFeed as jest.Mock).mockResolvedValueOnce(mockData); // Simulate data fetching

    const { getByText, queryByText } = render(
      <MemoryRouter>
        <DataForecast location={'here'} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(getByText('Test City')).toBeInTheDocument();
      expect(getByText('Monday')).toBeInTheDocument();
      expect(queryByText(/O3: .+/i)).toBeInTheDocument(); // Check for presence of text starting with "O3: "
      expect(queryByText(/pm10: .+/i)).toBeInTheDocument(); // Check for presence of text starting with "pm10: "
      expect(queryByText(/pm25: .+/i)).toBeInTheDocument(); // Check for presence of text starting with "pm25: "
      expect(queryByText(/UVI: .+/i)).toBeInTheDocument(); // Check for presence of text starting with "UVI: "
    });
  });
});
