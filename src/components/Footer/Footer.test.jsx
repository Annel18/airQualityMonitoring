import React from "react"
import { render, screen } from "@testing-library/react"
import Footer from "./Footer"

describe("Footer", () => {
  it("renders Footer component", () => {
    render(<Footer />);
    const levelsKey = screen.getByText("0 - 25")
    const aboutLink = screen.getByText("About")
    const resourcesLink = screen.getByText("Resources")
    const sourceCodeLink = screen.getByText("Source Code")

    expect(levelsKey).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    expect(resourcesLink).toBeInTheDocument()
    expect(sourceCodeLink).toBeInTheDocument()
  }) 
})
