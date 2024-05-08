import { render, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import WidgetDetails from './index'
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../utils/loaders/loadExternalScript', () => ({
  loadExternalScript: jest.fn(),
}))

jest.mock('../../utils/loaders/getCityFeed', () => ({
  getCityFeed: jest.fn(() => Promise.resolve({
    status: 'ok',
    data: {
      city: { name: 'London' },
    },
  })),
}))

// Mock _aqiFeed function
window._aqiFeed = jest.fn()

describe('WidgetDetails', () => {
  it('fetches city feed data and loads external script when location prop changes', async () => {
    render(
      <MemoryRouter>
        <WidgetDetails location="London" />
      </MemoryRouter>
    )

    // Wait for the component to render and the effects to be executed
    await waitFor(() => {
      // Assert that the container element is present
      expect(document.getElementById('city-aqi-container-detailed')).toBeInTheDocument()

      // Assert that _aqiFeed is called with the expected arguments
      expect(window._aqiFeed).toHaveBeenCalledWith({
        container: 'city-aqi-container-detailed',
        city: 'london',
        lang: 'en',
        callback: expect.any(Function),
      })
    })
  })
})