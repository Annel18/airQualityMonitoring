import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

import App from "./App"

describe("App", () => {
  it("renders App component", async () => {
    render(
      <Router>
        <App />
      </Router>
    )
    const linkElement = await screen.findByText(/air/i)
    expect(linkElement).toBeInTheDocument()
  })
})
