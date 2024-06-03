import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PageRealTime from './index'

import '@testing-library/jest-dom/extend-expect'

// @ts-expect-error
import { getCityFeed } from '../../utils/loaders/getCityFeed'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(() => ({ status: 'ok' })),
}))

jest.mock('../../utils/loaders/getCityFeed', () => ({
  getCityFeed: jest.fn().mockResolvedValue({
    data: {
      city: {
        name: 'Test City',
        geo: [51.502105, -0.140002]
      },
      aqi: 85,
      iaqi: {
        pm25: { v: 40 },
        pm10: { v: 20 },
        o3: { v: 10 },
        no2: { v: 15 },
        so2: { v: 5 },
        co: { v: 1 },
      },
      time: {
        s: '2024-05-29 12:00:00',
      },
    },
  }),
}))

describe('PageRealTime', () => {
  it('renders PageRealTime component with correct data status', async () => {
    render(
      <MemoryRouter>
        <PageRealTime />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toBeInTheDocument()
      expect(screen.getByRole('heading', {name:'Test City Air Quality'})).toBeInTheDocument()
    })
  })
})
