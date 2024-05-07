import { render, screen } from '@testing-library/react'
import PageResources from './PageResources'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

describe('PageResources component', () => {
  test('renders page title', () => {
    render(
      <Router>
        <PageResources />
      </Router>
    )

    // Assert that the page title is rendered
    expect(screen.getByText('Resources')).toBeInTheDocument()
  })
})
