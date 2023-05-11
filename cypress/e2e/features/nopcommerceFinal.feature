Feature:  nopcommerce ecommerce application verification

Scenario: Verify nopcommerce product Category page
        Given I nevigate demo nopcommerce landing page
        When  I select the Product Cetaogory
        And   I select the Notebooks
        Then  Verify Notebooks Page

Scenario: Verify select nopcommerce Product item 
        When I select the Product
        And  I added selected product into cart
        Then I verify the product is added into cart