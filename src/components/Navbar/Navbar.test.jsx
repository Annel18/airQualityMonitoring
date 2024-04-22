import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Navbar from "./Navbar"
import { MemoryRouter } from "react-router-dom"



// jest.mock('react-dom', () => ({ render: jest.fn() }))

describe("Navbar", () => {

  it("renders Navbar component", async () => {
    render(<Navbar />)
    const linkElement = await screen.findByText(/Air Quality App/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('renders Navbar component with default value', () => {
    const { getByText, getByLabelText } = render(<Navbar />)

    // Check if the Navbar header is rendered
    expect(getByText('Air Quality App')).toBeInTheDocument()

    // Check if the Feed Type label is rendered
    expect(getByLabelText('Feed Type')).toBeInTheDocument()

    // Check if the default value is 'Real-Time'
    expect(getByText('Real-Time')).toBeInTheDocument()
  })

  it("changes redirection value when selecting Forecast", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    const feedTypeSelect = screen.getByLabelText("Feed Type")
    fireEvent.mouseDown(feedTypeSelect)
    const forecastOption = screen.getByText("Forecast")
    fireEvent.click(forecastOption)

    expect(forecastOption.selected).toBe(true)
  })
})