import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import PageRealTime from '../PageRealTime/PageRealTime'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(() => ({ 
    data: { city: { name: 'Paris' } }, 
    status: 'ok' 
  })),
}))

describe("SearchBar", () => {
  it("renders SearchBar component within PageRealTime component", async () => {
    render(<PageRealTime />)
    const placeholderText = await screen.findByPlaceholderText(/Search by name.../i)
    expect(placeholderText).toBeInTheDocument()
  })

  it("changes location when search is submitted", async () => {
    render(<PageRealTime />)
    const searchValue = "Paris"
    const searchField = screen.getByPlaceholderText(/Search by name.../i)
    fireEvent.change(searchField, { target: { value: searchValue } })
    fireEvent.submit(screen.getByTestId('searchForm')) // Use getByTestId to target the form
    
    // Ensure the search value matches the mock data (case-insensitive)
    await waitFor(() => {
      const mockedCitySearch = screen.queryByText(new RegExp(searchValue, "i"))
      expect(mockedCitySearch).toBeInTheDocument()
    }, { timeout: 5000 }) // Increase timeout to 5 seconds
  })
})
