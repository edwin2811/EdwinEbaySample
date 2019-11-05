package TestRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(plugin = {"pretty"},tags= {"@test"}


   // @RunWith(Cucumber.class)
   // @CucumberOptions(
	   //features="C:\\Users\\Wilfred\\git\\EbaySample\\demoebay\\src\\main\\resources\\Feature\\Homepage.feature"
		    //glue= {"StepDefinitions"},
		    //format= {"pretty","html:test-outout"},
		    //monochrome=true,
		    //dryRun=false
		   )

public class TestRunner {

}
