package Stepdefinitions;

import org.junit.Assert;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class EbayHomepageSteps {
	
	WebDriver driver;			
    @Given("^User is in the Ebay Homepage$")
	public void user_is_already_in_homepage()						
    {		
       System.setProperty("webdriver.gecko.driver", "C:\\Users\\Wilfred\\Downloads\\geckodriver-v0.26.0-win64//geckodriver.exe");					
       driver= new FirefoxDriver();					
       driver.manage().window().maximize();			
       driver.get("https://www.ebay.com.au ");					
    }
    @When("^User views the Homepage$")
    public void user_is_viewing_the_page() {
    	
    	String title=driver.getTitle();
    	System.out.println(title);
    	Assert.assertEquals("Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",title);}	
      
    
    @Then("^User enters 'Books' in search options$")
    public void i_click_on_the_search_option() {
    	
        driver.findElement(By.name("_nkw")).sendKeys("books");
        driver.findElement(By.id("gh-btn")).click();
        }
    
    @Then("^Click on the first product from the dropdown$")
    public void i_Click_on_the_first_product_from_the_dropdown() throws InterruptedException 
    {
    Thread.sleep(2000);//using it so that we wait for the page to load
    	
    	driver.findElement(By.partialLinkText("The Complete Keto Diet Plan for Beginners – 4 Book Set – EB00k Fast Delivery")).click(); 
    }
    
    @Then("^user adds item to the cart$")
         public void user_adds_items_to_the_cart() {
         	
    	
    	driver.findElement(By.id("isCartBtn_btn")).click();
             }
    
 
    @And("^Validate that the book is in the cart$")
    public void validate_that_the_book_is_in_the_cart() throws InterruptedException  {
    	Thread.sleep(2000);
    	driver.findElement(By.partialLinkText("The Complete Keto Diet Plan for Beginners – 4 Book Set – EB00k Fast Delivery")); 
        
    }
    
    @Then("^User will remove the product from the cart page$")
    public void User_will_remove_the_product_from_the_cart_page() throws InterruptedException  {
    	Thread.sleep(2000);
    	driver.findElement(By.xpath("//*[@id=\"mainContent\"]/div/div[3]/div/div/div/div[2]/div/div[1]/div/div/div[2]/span[2]/button")).click();
    	
    }
    @And("^validate that the cart is empty$")
    public void validate_that_the_cart_is_empty() throws InterruptedException  {
    	Thread.sleep(2000);
    	
    	
        String empty=driver.findElement(By.xpath("//*[@id=\"mainContent\"]/div/div[3]/div/div/div[1]/span/span")).getText();
    	
    	System.out.println(empty);
    	Assert.assertEquals("You don't have any items in your cart.",empty);
        System.out.println("Successfully validated that cart is empty");
    	driver.close();	
    }	
             
        }
    

    
    
