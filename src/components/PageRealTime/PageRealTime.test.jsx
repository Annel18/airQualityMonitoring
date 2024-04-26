import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PageRealTime from './PageRealTime';

// Mocking the useLoaderData hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(() => ({ data: { city: { name: 'Mocked City' } }, status: 'mockedStatus' })),
}));

// Mocking _aqiFeed function
window._aqiFeed = jest.fn();

describe('PageRealTime', () => {
  it('renders PageRealTime component with correct data status', async () => {
    // Act
    render(
      <BrowserRouter>
        <PageRealTime />
      </BrowserRouter>
    );

    // Assert
    await waitFor(() => {
      expect(screen.getByText('DATA status = mockedStatus')).toBeInTheDocument();
      expect(window._aqiFeed).toHaveBeenCalledWith({
        container: 'city-aqi-container',
        city: 'Mocked City',
        display: '%details',
        lang: 'en',
      });
    });
  });
});
