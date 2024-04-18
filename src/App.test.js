import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {

    it("renders App component", async () => {
        render(<App />);
        const linkElement = await screen.findByText(/Hello World!/i);
        expect(linkElement).toBeInTheDocument();
    });
});