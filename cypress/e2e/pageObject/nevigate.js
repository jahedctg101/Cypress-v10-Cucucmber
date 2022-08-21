
const landingPage = "https://demo.nopcommerce.com/"

class nevigate{
    url(){
        // cy.visit("https://demo.nopcommerce.com/")
       return cy.visit(landingPage)
    }
}// class nevigate

export default nevigate