import React, { useEffect } from 'react';
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
    // Mocking useEffect to capture the callback
    const useEffectMock = jest.spyOn(React, 'useEffect');
    useEffectMock.mockImplementationOnce(f => f());

    // Act
    render(
      <BrowserRouter>
        <PageRealTime />
      </BrowserRouter>
    );

    // Assert
    expect(screen.getByText('Real Time DATA')).toBeInTheDocument();

    // Wait for the component to finish rendering
    await waitFor(() => {
      expect(screen.getByText('DATA status = mockedStatus')).toBeInTheDocument();
      expect(window._aqiFeed).toHaveBeenCalledWith({
        container: 'city-aqi-container',
        city: 'Mocked City',
        display: '%details',
        lang: 'en',
      });
    });

    // Restore useEffect
    useEffectMock.mockRestore();
  });

  it('renders PageRealTime component when city data is not defined', async () => {
    // Mocking useEffect to capture the callback
    const useEffectMock = jest.spyOn(React, 'useEffect');
    useEffectMock.mockImplementationOnce(f => f());

    // Mocking useLoaderData hook to return undefined city data
    jest.spyOn(require('react-router-dom'), 'useLoaderData').mockReturnValueOnce({ data: {} });

    // Act
    render(
      <BrowserRouter>
        <PageRealTime />
      </BrowserRouter>
    );

    // Assert
    expect(screen.getByText('Real Time DATA')).toBeInTheDocument();

    // Wait for the component to finish rendering
    await waitFor(() => {
      expect(screen.queryByText('DATA status = mockedStatus')).toBeNull();
      expect(window._aqiFeed).not.toHaveBeenCalled();
    });

    // Restore useEffect
    useEffectMock.mockRestore();
  });

  it('renders PageRealTime component when city name is falsy', async () => {
    // Mocking useEffect to capture the callback
    const useEffectMock = jest.spyOn(React, 'useEffect');
    useEffectMock.mockImplementationOnce(f => f());

    // Mocking useLoaderData hook to return falsy city name
    jest.spyOn(require('react-router-dom'), 'useLoaderData').mockReturnValueOnce({ data: { city: { name: '' } } });

    // Act
    render(
      <BrowserRouter>
        <PageRealTime />
      </BrowserRouter>
    );

    // Assert
    expect(screen.getByText('Real Time DATA')).toBeInTheDocument();

    // Wait for the component to finish rendering
    await waitFor(() => {
      expect(screen.queryByText('DATA status = mockedStatus')).toBeNull();
      expect(window._aqiFeed).not.toHaveBeenCalled();
    });

    // Restore useEffect
    useEffectMock.mockRestore();
  });
});
