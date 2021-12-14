package com.orangehrmlive.demo.cucumber.stepdefs;

import com.orangehrmlive.demo.pages.HomePage;
import com.orangehrmlive.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTest {
    @Then("^I am on Dashboard$")
    public void iAmOnDashboard() {
        new HomePage().verifyWelcomeText("welcome");
    }

    @Then("^I cam see logo is dipalyed$")
    public void iCamSeeLogoIsDipalyed() {
        new HomePage().verifyOrangeHrmLogoIsVisible();
    }

    @When("^I click on User Profile logo$")
    public void iClickOnUserProfileLogo() {
        new HomePage().clickOnProfileLogo();
    }

    @And("^I mouse hover on 'Logout' link and click$")
    public void iMouseHoverOnLogoutLinkAndClick() throws InterruptedException {
        new HomePage().clickOnLogout();
    }

    @Then("^I am successfully logged out$")
    public void iAmSuccessfullyLoggedOut() {
        new LoginPage().verifyLoginPaneltext("LOGIN Panel");
    }
}
