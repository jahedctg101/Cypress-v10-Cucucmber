/// <reference types = 'cypress' />

import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor"

Given('I am in the nopcommerce landing page',()=>
{
    cy.visit("/")
    // cy.title().should('eq','CodenBox AutomationLab – Learn, Earn & be an Expert in Automation')    
})

When('I search Laptop',()=>{
    cy.get(".ui-autocomplete-input").type("Laptop").screenshot('Laptop')
    cy.get("[type='submit']").click()
    // cy.contains('Search').should('eq','Search')
    // cy.log("Verified Search Page")
})

Then('I should see headline is "Search"',()=>
{
    // Option 1
    // cy.contains('Search').should('contain','Search')
    // Option 2

    cy.get('div.page-title>h1').invoke('text').then((text1) =>
    {
        expect(text1).to.eq('Search') 
        cy.screenshot('SearchPage')       
    })
    
    // const s=cy.get('div.page-title>h1')
    // cy.log(s)
    // s.should('contain','Search')
    cy.log("Verified Search Page")
}) //Then
