/// <reference types = 'cypress' />

// Apply Page Object Model
import {Given,When,And,Then} from "@badeball/cypress-cucumber-preprocessor"
import nevigate from "../pageObject/nevigate"
import product_Cetaogory from "../pageObject/product_Cetaogory"
import select_Item from "../pageObject/select_Item"
import productPage from "../pageObject/productPage"
import addToCart from "../pageObject/addToCart"


const nv = new nevigate()
const ctgrInvoke = new product_Cetaogory()
const sItemN = new select_Item()
const productSelect = new productPage()
const pAddedToCart = new addToCart()

Given('I nevigate demo nopcommerce landing page',()=>
{
   
    // cy.visit("/")
    nv.url()
    cy.title().should('eq','nopCommerce demo store')    
})

When('I select the Product Cetaogory',()=>{
    // cy.contains('Computers ').invoke('show')
    ctgrInvoke.Category_Invoke()
    cy.wait(4000)
})

And('I select the Notebooks',()=>{
    // cy.contains('Notebooks ').click({force:true})
    sItemN.itemName()
    cy.wait(4000)
}
)  

Then('Verify Notebooks Page',()=>
{
    cy.url().should('include','notebooks')
}
) //Then

When('I select the Product',()=>{
    // cy.get('h2>a[href="/samsung-series-9-np900x4c-premium-ultrabook"]').scrollIntoView().click()
    productSelect.clickOnProduct()
      cy.wait(3000)
})

And('I added selected product into cart',()=>{
    //   cy.get('.qty-input').should('be.visible').clear().type(2)
      pAddedToCart.cart().should('be.visible').clear().type(2)
      cy.wait(4000)
    //   cy.get('button#add-to-cart-button-6').click()
    pAddedToCart.Clickadd2CartButton()
      cy.wait(2000)
})

Then('I verify the product is added into cart',()=>{
    cy.get('.cart-label').click()
    cy.wait(3000)
    cy.get('.product-name').contains('Samsung Series 9 NP900X4C Premium Ultrabook')
})
