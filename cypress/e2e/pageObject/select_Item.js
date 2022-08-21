
const itemN = 'Notebooks '

class select_Item
{
    itemName()
    {
       return cy.contains(itemN).click({force:true})  
    }
}//class
export default select_Item