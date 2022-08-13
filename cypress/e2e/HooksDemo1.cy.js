/// <reference types = 'cypress' />

describe('Hooks Demo1 Test',()=>
{
    beforeEach(()=>
    {
        cy.visit("https://www.nopcommerce.com/en/demo")
    }

    )
    it('Test beforeeach',()=>
    {
        cy.log("Hooks Demo test")
    })
})