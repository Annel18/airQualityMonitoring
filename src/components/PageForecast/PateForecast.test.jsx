import { render, screen } from "@testing-library/react"

import PageForecast from "./PageForecast"

describe("PageForecast", () => {

    it("renders PageForecast component", async () => {
        render(<PageForecast />)
        const linkElement = await screen.findByText(/Forecast DATA/i)
        expect(linkElement).toBeInTheDocument()
    })
})