import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PageRealTime from './PageRealTime'

// Mocking the useLoaderData hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(() => ({ status: 'mockedStatus' })),
}))

describe('PageRealTime', () => {
  it('renders PageRealTime component with correct data status', () => {
    // Act
    render(
      <BrowserRouter>
        <PageRealTime />
      </BrowserRouter>
    )

    // Assert
    expect(screen.getByText('Real Time DATA')).toBeInTheDocument()
    expect(screen.getByText('DATA status = mockedStatus')).toBeInTheDocument()
  })
})
