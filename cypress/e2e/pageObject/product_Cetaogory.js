
const selectCtgr = 'Computers '
class product_Cetaogory
{
   Category_Invoke(){
    return cy.contains(selectCtgr).invoke('show')
   }
}// class
export default product_Cetaogory