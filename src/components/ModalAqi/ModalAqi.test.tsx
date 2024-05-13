// ModalAqi.test.tsx
import { render, screen } from "@testing-library/react";
import ModalAqi from "./ModalAqi";
import '@testing-library/jest-dom/extend-expect'


describe("ModalAqi", () => {
  const mockLevel = {
    aqi: "10",
    backgroundColor: "blue",
    textColor: "white",
    level: {
      aqi: "10",
      airPollutionLevel: "Low",
      healthImplications: "Some health implications",
      cautionaryStatement: "Be cautious",
    },
  };

  it("renders modal with correct content", () => {
    render(<ModalAqi open={true} handleClose={() => {}} level={mockLevel} />);

    // Modal header should display correct AQI information
    expect(screen.getByText("AQI: 10 - Low")).toBeInTheDocument();

    // Modal body should display health implications and cautionary statement
    expect(screen.getByText("Health Implications")).toBeInTheDocument();
    expect(screen.getByText("Some health implications")).toBeInTheDocument();
    expect(screen.getByText("Cautionary Statement")).toBeInTheDocument();
    expect(screen.getByText("Be cautious")).toBeInTheDocument();
  });

  it("does not render modal when closed", () => {
    render(<ModalAqi open={false} handleClose={() => {}} level={mockLevel} />);

    // Modal should not be rendered
    expect(screen.queryByText("AQI: 10 - Low")).not.toBeInTheDocument();
    expect(screen.queryByText("Health Implications")).not.toBeInTheDocument();
    expect(screen.queryByText("Some health implications")).not.toBeInTheDocument();
    expect(screen.queryByText("Cautionary Statement")).not.toBeInTheDocument();
    expect(screen.queryByText("Be cautious")).not.toBeInTheDocument();
  });
});
