import { render, screen } from "@testing-library/react";

import App from "./App";

xdescribe("App", () => {

    it("renders App component", async () => {
        render(<App />);
        const linkElement = await screen.findByText(/DATA/i);
        expect(linkElement).toBeInTheDocument();
    });
});