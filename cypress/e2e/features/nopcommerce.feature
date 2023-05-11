Feature:  nopcommerce verification

Scenario: Verify nopcommerce page
       Given I am in the nopcommerce landing page
       When I search Laptop
       Then I should see headline is "Search"

