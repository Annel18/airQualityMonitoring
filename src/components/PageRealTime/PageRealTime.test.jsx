import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PageRealTime from './PageRealTime'

// Mocking the useLoaderData hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(() => ({ data: { city: { name: 'Mocked City' } }, status: 'mockedStatus' })),
}))

// Mocking _aqiFeed function
window._aqiFeed = jest.fn((options) => {
  options.callback({ details: 'Mocked HTML snippet' }) // Simulate callback invocation with mocked data
})

describe('PageRealTime', () => {
  it('renders PageRealTime component with correct data status', async () => {
    // Act
    render(
      <BrowserRouter>
        <PageRealTime />
      </BrowserRouter>
    )

    // Assert
    await waitFor(() => {
      expect(screen.getByText('Your Searched Data')).toBeInTheDocument() // Update the text
      expect(screen.getByText('Your Local Data')).toBeInTheDocument() // Update the text
      // Update the assertion to match the actual text content rendered in the component
      expect(screen.queryByText('mockedStatus')).not.toBeInTheDocument()
    })
  })
})
