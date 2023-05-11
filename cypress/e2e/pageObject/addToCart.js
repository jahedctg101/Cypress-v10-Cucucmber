
const prdAddedToCart = '.qty-input'
const AddToCartButton = 'button#add-to-cart-button-6'

class addToCart
{
    cart()
    {
        return cy.get(prdAddedToCart)
        // return this
    }

    Clickadd2CartButton()
    {
       return  cy.get(AddToCartButton).click()
    }
}

export default addToCart