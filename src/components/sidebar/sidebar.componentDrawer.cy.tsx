import React from 'react'
import Drawer from './sidebar.component'

describe('<Drawer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Drawer />)
  })
})