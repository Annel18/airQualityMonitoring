import { render, fireEvent, waitFor } from "@testing-library/react";
import SearchBar from "./index";

describe("SearchBar", () => {
  it("changes location when search is submitted", async () => {
    const handleLocationChange = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <SearchBar onLocationChange={handleLocationChange} />
    );

    const searchValue = "Paris";
    const searchField = getByPlaceholderText(/Search by name.../i);
    fireEvent.change(searchField, { target: { value: searchValue } });
    fireEvent.submit(getByTestId("searchForm"));

    await waitFor(() => {
      expect(handleLocationChange).toHaveBeenCalledWith(searchValue);
    });
  });
});
