package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//@RunWith(Cucumber.class)

//@CucumberOptions(plugin = {"pretty"},tags= {"@test"},


    @RunWith(Cucumber.class)
    @CucumberOptions(
	   features="C:\\Users\\Wilfred\\git\\EbaySample\\demoebay\\src\\main\\java\\Homepage.feature"
		    ,glue= {"Stepdefinitions"},
		    format= {"pretty","html:test-outout"},
		    monochrome=true
		    //dryRun=false
		   )

public class TestRunner {

}
    
    
    
   // C:\\Users\\Wilfred\\git\\EbaySample\\demoebay\\src\\test\\resources\\Homepage.feature
//C:\Users\Wilfred\git\EbaySample\demoebay\src\main\java\Homepage.feature

//@RunWith(Cucumber.class)
//@Cucumber.Options(format = {"pretty", "html:target/cucumber-htmlreport","json-pretty:target/cucumber-report.json"})
