import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom" // Import MemoryRouter
import Footer from "./Footer"
import aqiColorKey from '../../assets/data/aqiColorKey'

describe("Footer", () => {
  it("renders Footer component with correct AQI color key", () => {
    render(
      <MemoryRouter> {/* Use MemoryRouter instead of BrowserRouter */}
        <Footer />
      </MemoryRouter>
    )
    aqiColorKey.forEach((level) => {
      const aqiElement = screen.getByText(level.aqi)
      expect(aqiElement).toBeInTheDocument()
      expect(aqiElement).toHaveStyle({
        backgroundColor: level.backgroundColor,
        color: level.textColor,
      })
    })
  })

  it("renders Footer component with correct navigation links", () => {
    render(
      <MemoryRouter> {/* Use MemoryRouter instead of BrowserRouter */}
        <Footer />
      </MemoryRouter>
    )
    const aboutLink = screen.getByText("About")
    const resourcesLink = screen.getByText("Resources")
    const sourceCodeLink = screen.getByText("Source Code")

    expect(aboutLink).toBeInTheDocument()
    expect(aboutLink).toHaveAttribute("href", "/About/")

    expect(resourcesLink).toBeInTheDocument()
    expect(resourcesLink).toHaveAttribute("href", "/Resources/")

    expect(sourceCodeLink).toBeInTheDocument()
    expect(sourceCodeLink).toHaveAttribute("href", "https://github.com/Annel18/air-quality-monitoring")
    expect(sourceCodeLink).toHaveAttribute("target", "_blank")
  })

  it("renders Footer component with an error if navigation links are missing href attributes", () => {
    const { container } = render(
      <MemoryRouter> 
        <Footer />
      </MemoryRouter>
    )
    const links = container.querySelectorAll(".footer-nav a")
    links.forEach((link) => {
      expect(link).toHaveAttribute("href")
    })
  })
})
