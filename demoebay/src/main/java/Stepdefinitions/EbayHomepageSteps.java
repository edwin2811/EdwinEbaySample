package Stepdefinitions;

import org.junit.Assert;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;


public class EbayHomepageSteps {
	
	WebDriver driver;			
    @Given("^User am in the Ebay Homepage$")
	public void user_is_already_in_homepage()						
    {		
       System.setProperty("webdriver.gecko.driver", "C:\\Users\\Wilfred\\Downloads\\geckodriver-v0.26.0-win64//geckodriver.exe");					
       driver= new FirefoxDriver();					
       driver.manage().window().maximize();			
       driver.get("https://www.ebay.com.au ");					
    }
    @And("^User should view the Homepage$")
    public void user_is_viewing_the_page() {
    	
    	String title=driver.getTitle();
    	System.out.println(title);
    	Assert.assertEquals("Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",title);}	
      
    
    @And("^User enter 'Books' in search options$")
    public void i_click_on_the_search_option() {
    	
        driver.findElement(By.name("_nkw")).sendKeys("books");
        driver.findElement(By.id("gh-btn")).click();
        }
    
    @And("^Click on the first product from the dropdown$")
    public void i_Click_on_the_first_product_from_the_dropdown() 
    {
    	Thread.wait(2000)
    	 //  driver.findElement(By.className("s-item__title s-item__title--has-tags")).click();
    	//driver.findElement(ByClassName(//*[@class=s-item__title s-item__title--has-tags]//*[text()='The Complete Keto Diet Plan for Beginners – 4 Book Set – EB00k Fast Delivery'])
    	//driver.findElement(By.linkText("The Complete Keto Diet Plan for Beginners – 4 Book Set – EB00k Fast Delivery")).click(); 
    }
    
    @And("^user adds item to the cart$")
         public void user_adds_items_to_the_cart() {
         	
    	//driver.findElement(By.className("s-item__title s-item__title--has-tags")).click();
    	driver.findElement(By.id("isCartBtn_btn")).click();
             }
    
 
    @And("^Validate that the book is in the cart$")
    public void validate_that_the_book_is_in_the_cart()  {
    	
    	driver.findElement(By.linkText("Shopping cart (1 item)")).click();
        
    }
}
    
    
