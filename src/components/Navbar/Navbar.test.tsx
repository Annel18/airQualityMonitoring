
import { render, fireEvent } from '@testing-library/react'
import Navbar from './Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

describe('Navbar Component', () => {
  test('renders Navbar component', () => {
    const { getByText, getByLabelText } = render(
      <Router>
        <Navbar />
      </Router>
    )

    const headerElement = getByText('Air Quality App')
    const selectElement = getByLabelText('Feed Type')

    expect(headerElement).toBeInTheDocument()
    expect(selectElement).toBeInTheDocument()
  })

  test('selecting option navigates to correct route', () => {
    const { getByLabelText } = render(
      <Router>
        <Navbar />
      </Router>
    )

    const selectElement = getByLabelText('Feed Type')

    fireEvent.change(selectElement, { target: { value: '/forecast' } })

    expect(window.location.pathname).toBe('/forecast')
  })
})
