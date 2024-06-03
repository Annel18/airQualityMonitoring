import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataRealTime from './DataRealTime';
import { getCityFeed } from '../../utils/loaders/getCityFeed';

jest.mock('../../utils/loaders/getCityFeed');

const mockCityFeedData = {
  data: {
    city: {
      name: 'Test City',
    },
    aqi: 85,
    iaqi: {
      pm25: { v: 40 },
      pm10: { v: 20 },
      o3: { v: 10 },
      no2: { v: 15 },
      so2: { v: 5 },
      co: { v: 1 }
    },
    time: {
      s: '2024-05-29 12:00:00'
    }
  }
};

describe('DataRealTime component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (getCityFeed as jest.Mock).mockResolvedValue(mockCityFeedData);
  });

  test('renders loading state initially', () => {
    render(<DataRealTime location="test-location" />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  test('fetches and displays city feed data', async () => {
    await act(async () => {
      render(<DataRealTime location="test-location" />);
    });

    await waitFor(() => expect(getCityFeed).toHaveBeenCalledWith('test-location'));

    await waitFor(() => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveTextContent(/Test City Air Quality/i);
    });

    expect(screen.getByText('85')).toBeInTheDocument();
    expect(screen.getByText('Moderate')).toBeInTheDocument();
    expect(screen.getByText('Updated on 5/29/2024, 12:00:00 PM')).toBeInTheDocument();

    // Using custom function to match text content
    expect(screen.getByText((_, element) => element?.textContent === 'PM25 AQI')).toBeInTheDocument();
    expect(screen.getByText('40')).toBeInTheDocument();
    expect(screen.getByText((_, element) => element?.textContent === 'PM10 AQI')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText((_, element) => element?.textContent === 'O3 AQI')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText((_, element) => element?.textContent === 'NO2 AQI')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText((_, element) => element?.textContent === 'SO2 AQI')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText((_, element) => element?.textContent === 'CO AQI')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('handles error state', async () => {
    (getCityFeed as jest.Mock).mockRejectedValue(new Error('Error fetching city feed'));

    console.error = jest.fn(); // Suppress error output in the test console

    await act(async () => {
      render(<DataRealTime location="test-location" />);
    });

    await waitFor(() => expect(console.error).toHaveBeenCalledWith('Error fetching city feed:', expect.any(Error)));

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  test('displays correct AQI level and background color', async () => {
    await act(async () => {
      render(<DataRealTime location="test-location" />);
    });

    await waitFor(() => expect(getCityFeed).toHaveBeenCalledWith('test-location'));

    const levelStamp = screen.getByText('85').closest('.level-stamp');
    expect(levelStamp).toHaveStyle('background-color: rgb(255, 222, 76)');
    expect(levelStamp).toHaveStyle('color: black');
  });
});
