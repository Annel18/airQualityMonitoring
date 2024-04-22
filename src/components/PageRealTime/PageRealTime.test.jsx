import { render, screen } from "@testing-library/react";

import PageRealTime from "./PageRealTime";

xdescribe("PageRealTime", () => {

    it("renders PageRealTime component", async () => {
        render(<PageRealTime />);
        const linkElement = await screen.findByText(/Real Time DATA/i);
        expect(linkElement).toBeInTheDocument();
    });
});