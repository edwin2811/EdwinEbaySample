@test

Feature: Ebay Homepage
As a user , need to search for item
Add to cart and remove the item from the cart in add to cart page

Scenario: Open Ebay homepage test

Given User am in the Ebay Homepage
And User should view the Homepage
And User enter 'Books' in search options
And Click on the first product from the dropdown
And user adds item to the cart
And Validate that the book is in the cart
Then User will remove the product from the cart page
#And validate that the item was removed from the cart
#And validate that the cart is empty






 

   
