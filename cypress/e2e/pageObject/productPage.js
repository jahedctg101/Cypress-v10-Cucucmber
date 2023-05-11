
const prdSelect = 'h2>a[href="/samsung-series-9-np900x4c-premium-ultrabook"]'

class productPage
{
  clickOnProduct()
  {
    return cy.get(prdSelect).scrollIntoView().click()
  }
}// class

export default productPage