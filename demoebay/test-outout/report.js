$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Wilfred/git/EbaySample/demoebay/src/main/java/Homepage.feature");
formatter.feature({
  "line": 3,
  "name": "Ebay Homepage",
  "description": "As a user , need to search for item\nAdd to cart and remove the item from the cart in add to cart page",
  "id": "ebay-homepage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Open Ebay homepage test",
  "description": "",
  "id": "ebay-homepage;open-ebay-homepage-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User is in the Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User views the Homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters \u0027Books\u0027 in search options",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on the first product from the dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user adds item to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Validate that the book is in the cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User will remove the product from the cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "validate that the cart is empty",
  "keyword": "And "
});
formatter.match({
  "location": "EbayHomepageSteps.user_is_already_in_homepage()"
});
formatter.result({
  "duration": 9244501900,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.user_is_viewing_the_page()"
});
formatter.result({
  "duration": 24463000,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.i_click_on_the_search_option()"
});
formatter.result({
  "duration": 4303799200,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.i_Click_on_the_first_product_from_the_dropdown()"
});
formatter.result({
  "duration": 6456108100,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.user_adds_items_to_the_cart()"
});
formatter.result({
  "duration": 4052277100,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.validate_that_the_book_is_in_the_cart()"
});
formatter.result({
  "duration": 2193384800,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.User_will_remove_the_product_from_the_cart_page()"
});
formatter.result({
  "duration": 2244036800,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.validate_that_the_cart_is_empty()"
});
formatter.result({
  "duration": 4394742900,
  "status": "passed"
});
});