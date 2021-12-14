package com.orangehrmlive.demo.cucumber.stepdefs;

import com.orangehrmlive.demo.pages.AddUserPage;
import com.orangehrmlive.demo.pages.LoginPage;
import com.orangehrmlive.demo.pages.ViewSystemUsersPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UsersTest {

    @And("^I Login to Application$")
    public void iLoginToApplication() {
        new LoginPage().loginToApplicaiton("Admin", "admin123");
    }

    @And("^I click on 'Admin' tab$")
    public void iClickOnAdminTab() {
        new ViewSystemUsersPage().clickOnAdminTab();
    }

    @Then("^I am on 'Admin' page$")
    public void iAmOnAdminPage() {
        new ViewSystemUsersPage().verifySystemUsersText("System Users");
    }

    @When("^I click on 'Add' button$")
    public void iClickOnAddButton() {
        new ViewSystemUsersPage().clickAddButton();
        new AddUserPage().verifyAddUserText("Add User");
    }

//    @And("^I add user details:$")
//    public void iAddUserDetails() {
//        new AddUserPage().addUserDetails("Admin", "Ananya Dash",
//                "Ananya9", "Disabled", "Ananya123", "Ananya123");
//    }

    @And("^I add user details 'User role', 'Employee name', 'Username', 'Status', 'password', 'Confirm Password'$")
    public void iAddUserDetailsUserRoleEmployeeNameUsernameStatusPasswordConfirmPassword() {

    }

    @And("^I click on 'Save' button$")
    public void iClickOnSaveButton() {
        new AddUserPage().clickOnSaveButton();
    }

    @Then("^User successfully saved$")
    public void userSuccessfullySaved() {
        new ViewSystemUsersPage().verifySuccessfullySavedMessage("Successfully Saved");
    }

    @When("^I enter 'Username' into username field$")
    public void iEnterUsernameIntoUsernameField() {
        new ViewSystemUsersPage().inputUserName("Ananya9");
    }

    @And("^I select 'User Role' from dropdown$")
    public void iSelectUserRoleFromDropdown() {
        new ViewSystemUsersPage().selectUserRole("Admin");
    }

    @And("^I select 'Status' from dropdown$")
    public void iSelectStatusFromDropdown() {
        new ViewSystemUsersPage().selectUserStatus("Disabled");
    }

    @And("^I click on 'Search' button$")
    public void iClickOnSearchButton() {
        new ViewSystemUsersPage().clickOnSearchButton();
    }

    @Then("^User is in search result$")
    public void userIsInSearchResult() {
        new ViewSystemUsersPage().verifyUserInSearchResult("Ananya9");
    }


    @And("^I select user from result list$")
    public void iSelectUserFromResultList() {
        new ViewSystemUsersPage().clickOnCheckBox();
    }

    @And("^I click on delete button$")
    public void iClickOnDeleteButton() {
        new ViewSystemUsersPage().clickOnDeleteButton();
        new ViewSystemUsersPage().acceptPopUpMessage();
    }

    @Then("^User Successfully Deleted$")
    public void userSuccessfullyDeleted() {
        new ViewSystemUsersPage().verifyRecordSuccessfullyDeletedMessage("Successfully Deleted");
    }

    @Then("^I can see 'No Records Found' message$")
    public void iCanSeeNoRecordsFoundMessage() {
        new ViewSystemUsersPage().verifyNoRecordFoundText("No Records Found");
    }
}
