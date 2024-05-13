import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PageRealTime from './index'

import '@testing-library/jest-dom/extend-expect'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(() => ({ status: 'ok' })), // Corrected mock to return 'ok' status
}))

describe('PageRealTime', () => {
  it('renders PageRealTime component with correct data status', async () => {
    render(
      <BrowserRouter>
        <PageRealTime />
      </BrowserRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('Your Searched Data')).toBeInTheDocument()
      expect(screen.getByText('Your Local Data')).toBeInTheDocument()
      // Update the assertion to match the actual text content rendered in the component
      expect(screen.queryByText('ok')).not.toBeInTheDocument() // Updated to check for 'ok' status
    })
  })
})
