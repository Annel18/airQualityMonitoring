import { render, screen } from "@testing-library/react"
import PageForecast from "./index"
import '@testing-library/jest-dom/extend-expect'

describe("PageForecast", () => {

    it("renders PageForecast component", async () => {
        render(<PageForecast />)
        const linkElement = await screen.findByText(/Forecast DATA/i)
        expect(linkElement).toBeInTheDocument()
    });
});