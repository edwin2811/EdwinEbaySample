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
  "name": "I am in the Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I view the Homepage",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \u0027Books\u0027 in search options",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Click on the first product from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user adds item to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate that the book is in the cart",
  "keyword": "And "
});
formatter.match({
  "location": "EbayHomepageSteps.user_is_already_in_homepage()"
});
formatter.result({
  "duration": 15725697000,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.user_is_viewing_the_page()"
});
formatter.result({
  "duration": 98328400,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.i_click_on_the_search_option()"
});
formatter.result({
  "duration": 9819222200,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.i_Click_on_the_first_product_from_the_dropdown()"
});
formatter.result({
  "duration": 1033978700,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: The Complete Keto Diet Plan for Beginners – 4 Book Set – EB00k Fast Delivery\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-25NP8CS\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 70.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20191030021342, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 24376, moz:profile: C:\\Users\\Wilfred\\AppData\\Lo..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b1feeb9f-3c8a-462d-b0d3-e092686cc277\n*** Element info: {Using\u003dlink text, value\u003dThe Complete Keto Diet Plan for Beginners – 4 Book Set – EB00k Fast Delivery}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat Stepdefinitions.EbayHomepageSteps.i_Click_on_the_first_product_from_the_dropdown(EbayHomepageSteps.java:44)\r\n\tat ✽.And I Click on the first product from the dropdown(C:/Users/Wilfred/git/EbaySample/demoebay/src/main/java/Homepage.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EbayHomepageSteps.user_adds_items_to_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayHomepageSteps.validate_that_the_book_is_in_the_cart()"
});
formatter.result({
  "status": "skipped"
});
});