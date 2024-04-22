import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

jest.mock('react-dom', () => ({ render: jest.fn() }))

describe('Main component', () => {
  it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    global.document.getElementById = (id) => id === 'root' && div
    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div)
  })
})