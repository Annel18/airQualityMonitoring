import { render, screen } from '@testing-library/react'
import PageAbout from './PageAbout'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

describe('PageAbout component', () => {
  test('renders page title', () => {
    render(
      <Router>
        <PageAbout />
      </Router>
    )

    // Assert that the page title is rendered
    expect(screen.getByText('About')).toBeInTheDocument()
  })
})
