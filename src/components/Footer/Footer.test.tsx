import { render, screen } from "@testing-library/react"
import Footer from "./index"
import aqiColorKey from '../../assets/data/aqiColorKey'


import '@testing-library/jest-dom/extend-expect'

describe('Footer component', () => {
  test('renders footer links', () => {
    render(
      <Router>
        <Footer />
      </Router>
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

  test('renders AQI color key', () => {
    render(
      <Router>
        <Footer />
      </Router>
    )

    const aqiLevels = screen.getAllByTestId('aqi-level')
    expect(aqiLevels).toHaveLength(11)
  })
})
