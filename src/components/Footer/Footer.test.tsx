import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Footer from "./index"
import { BrowserRouter } from 'react-router-dom'


import '@testing-library/jest-dom/extend-expect'

describe('Footer component', () => {
  it('renders footer links', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )

    // Assert that the links are rendered
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Source Code')).toBeInTheDocument()

    // Assert that the links have correct href or to attributes
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/About/')
    expect(screen.getByText('Resources').closest('a')).toHaveAttribute('href', '/Resources/')
    expect(screen.getByText('Source Code')).toHaveAttribute('href', 'https://github.com/Annel18/air-quality-monitoring')
    expect(screen.getByText('Source Code')).toHaveAttribute('target', '_blank')
  })

  it('renders AQI color key', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )

    const aqiLevels = screen.getAllByTestId('aqi-level')
    expect(aqiLevels).toHaveLength(11)
  })

  it('opens modal when AQI level button is clicked', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )

    // Get the first AQI level button and click it
    const firstAqiLevelButton = screen.getAllByTestId('aqi-level')[0]
    fireEvent.click(firstAqiLevelButton)

    // Assert that the modal is opened
    expect(screen.getByTestId('popup')).toBeInTheDocument()
  })

  it('closes modal when close button in modal is clicked', async () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )

    // Get the first AQI level button and click it to open the modal
    const firstAqiLevelButton = screen.getAllByTestId('aqi-level')[0]
    fireEvent.click(firstAqiLevelButton)

    // Get the close button in the modal and click it
    const closeButton = screen.getByLabelText('Close')
    fireEvent.click(closeButton)

    // Wait for the modal to be removed from the document
    await waitFor(() => {
      expect(screen.queryByTestId('popup')).not.toBeInTheDocument()
    })
  })
})