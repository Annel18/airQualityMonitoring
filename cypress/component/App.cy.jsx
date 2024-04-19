import React from 'react'
import App from '../../src/components/App/App'
import { mount } from '@cypress/react18'

describe('<App />', () => {
  it('mounts', () => {
    mount(<App />)
  })

  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
  })
})
