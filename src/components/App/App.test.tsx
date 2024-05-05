import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import App from "./App"

describe("App", () => {
    it("renders App component", async () => {
        render(
          <BrowserRouter>
            <App />
          </BrowserRouter>
        )
        const linkElement = await screen.findByText(/air/i);
        expect(linkElement).toBeInTheDocument();
    })
})