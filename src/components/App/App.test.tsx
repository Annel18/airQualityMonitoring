import { render, screen } from "@testing-library/react"
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import App from "./index"

const routes = [
  {
    path: '/',
    element: <App />,
  },
]

describe("App", () => {
  it("renders App component", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    })
    render(
      <RouterProvider router={router} />
    )
    const linkElement = await screen.findByText(/air/i)
    expect(linkElement).toBeInTheDocument()
  })
})
