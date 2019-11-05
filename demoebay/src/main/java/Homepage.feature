@test

Feature: Ebay Homepage
As a user , need to search for item
Add to cart and remove the item from the cart in add to cart page

Scenario: Open Ebay homepage test

Given User is in the Ebay Homepage
When User views the Homepage
Then User enters 'Books' in search options
Then Click on the first product from the dropdown
Then user adds item to the cart
And Validate that the book is in the cart
Then User will remove the product from the cart page
And validate that the cart is empty


#tags
#datatables
#examples:
#|Title|
#|Items?|
#| input    | output |
#| 2        | 4      | 
#| 3        | 5     |
#| 2        | 6    |






 

   
