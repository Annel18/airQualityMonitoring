import React from "react"
import { render, screen } from "@testing-library/react"
import Footer from "./Footer"
import aqiColorKey from '../../assets/data/aqiColorKey'

describe("Footer", () => {
  it("renders Footer component with correct AQI color key", () => {
    render(<Footer />)
    aqiColorKey.forEach((level, i) => {
      const aqiElement = screen.getByText(level.aqi)
      expect(aqiElement).toBeInTheDocument()
      expect(aqiElement).toHaveStyle({ backgroundColor: level.backgroundColor, color: level.textColor })
    })
  })

  it("renders Footer component with correct navigation links", () => {
    render(<Footer />)
    const aboutLink = screen.getByText("About")
    const resourcesLink = screen.getByText("Resources")
    const sourceCodeLink = screen.getByText("Source Code")

    expect(aboutLink).toBeInTheDocument()
    expect(aboutLink).toHaveAttribute("href", "")

    expect(resourcesLink).toBeInTheDocument()
    expect(resourcesLink).toHaveAttribute("href", "")

    expect(sourceCodeLink).toBeInTheDocument()
    expect(sourceCodeLink).toHaveAttribute("href", "")
  })

  it("renders Footer component with an error if navigation links are missing href attributes", () => {
    const { container } = render(<Footer />)
    const links = container.querySelectorAll(".footer-nav a")
    links.forEach(link => {
      expect(link).toHaveAttribute("href")
    })
  })
})
