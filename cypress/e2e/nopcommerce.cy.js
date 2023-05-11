/// <reference types = 'cypress' />

describe('empty spec', () => {
    it('Test nopcommerce Landing Page', () => {
      // I am in the Landing Page
      cy.visit('https://demo.nopcommerce.com')
    }) // it
  
    it('Category Computer Test',()=>
    {
      // Select Category
      cy.contains('Computers ').invoke('show')
      cy.wait(6000)

      // I Select Types of Item
      // cy.get('.notmobile>li:nth-child(1)>ul>li:nth-child(2)').invoke('show').click({force:true})
      cy.contains('Notebooks ').click({force:true})
      cy.wait(6000)
      cy.url().should('include','notebooks')

      // I select desired product
      cy.get('h2>a[href="/samsung-series-9-np900x4c-premium-ultrabook"]').scrollIntoView().click()
      cy.wait(3000)

      // I add to cart my product
      // cy.contains(' $1,590.00 ').should('eq',' $1,590.00 ')
      cy.get('.qty-input').should('be.visible').clear().type(2)
      cy.wait(4000)
      cy.get('button#add-to-cart-button-6').click()
      cy.wait(2000)

      // I verify the product added into cart
      cy.get('.cart-label').click()
      cy.wait(3000)
      cy.get('.product-name').contains('Samsung Series 9 NP900X4C Premium Ultrabook')
    })
    
  })// describe