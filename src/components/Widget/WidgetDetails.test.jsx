import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import WidgetDetails from './WidgetDetails';

jest.mock('react-router-dom', () => ({
  useLoaderData: jest.fn(() => ({
    data: {
      city: {
        name: 'London', // Mock city name
      },
    },
  })),
}));

describe('WidgetDetails', () => {
  beforeAll(() => {
    // Mock the _aqiFeed function
    window._aqiFeed = jest.fn();
  });

  it('renders widget container', async () => {
    render(<WidgetDetails />);
    
    // Check if the container element is present
    const container = screen.getByTestId('city-aqi-container-detailed');
    expect(container).toBeInTheDocument();
    
    // Check if loadExternalScript is called with the correct arguments
    await waitFor(() => {
      expect(window._aqiFeed).toHaveBeenCalledWith(expect.objectContaining({
        city: 'London',
        lang: 'en',
        container: 'city-aqi-container-detailed',
        callback: expect.any(Function),
      }));
    });
  });
});
