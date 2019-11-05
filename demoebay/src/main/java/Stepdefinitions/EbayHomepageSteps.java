package Stepdefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;


public class EbayHomepageSteps {
	
	WebDriver driver;
	
	
	@Given("^I am in the Ebay Homepage$")
     public void user_is_already_in_homepage() {
		
		System.setProperty("webdriver.chrome.driver","C:\\chromeD\\chromedriver.exe");
	    driver= new ChromeDriver();
	    driver.get("https://www.ebay.com.au");
	}
	

    @And("^I view the Homepage$")
    public void user_is_viewing_the_page() {
    	String title=driver.getTitle();
    	System.out.println(title);
    	Assert.assertEquals("Electronics, Cars, Fashion, Collectibles, Coupons and More",title);
    }	
    
    
    @And("^I enter 'Books' in search options$")
    public void i_click_on_the_search_option() {
        driver.findElement(By.name("_nkw")).sendKeys("books");
        }
    
    
    @Given("^I Click on the first product from the dropdown$")
    public void i_Click_on_the_first_product_from_the_dropdown() 
    {
       
        
    }
    
}
    
    
