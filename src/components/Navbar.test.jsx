import { render, screen } from "@testing-library/react";

import Navbar from "./Navbar";

xdescribe("Navbar", () => {

    it("renders Navbar component", async () => {
        render(<Navbar />);
        const linkElement = await screen.findByText(/Air Quality App/i);
        expect(linkElement).toBeInTheDocument();
    });
});