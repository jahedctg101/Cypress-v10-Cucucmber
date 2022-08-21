/// <reference types = 'cypress' />

describe('empty spec', () => {
  it('Test nopcommerce Landing Page', () => {
    cy.visit('https://demo.nopcommerce.com')
  }) // it

  it('Category Computer Test',()=>
  {
    cy.contains('Computers ').invoke('show')
    cy.wait(6000)
    // cy.get('.notmobile>li:nth-child(1)>ul>li:nth-child(2)').invoke('show').click({force:true})
    cy.contains('Notebooks ').click({force:true})
    cy.wait(6000)
    cy.url().should('include','notebooks')
    // cy.get('href=/samsung-series-9-np900x4c-premium-ultrabook').click()
  })
  
})// describe