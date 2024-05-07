import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PageRealTime from './PageRealTime'

import '@testing-library/jest-dom/extend-expect'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(() => ({ status: 'mockedStatus' })),
}))

describe('PageRealTime', () => {
  it('renders PageRealTime component with correct data status', async () => {
    render(
      <BrowserRouter>
        <PageRealTime />
      </BrowserRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('Real Time DATA')).toBeInTheDocument()
      expect(screen.getByText('DATA status = mockedStatus')).toBeInTheDocument()
    })
  })
})
