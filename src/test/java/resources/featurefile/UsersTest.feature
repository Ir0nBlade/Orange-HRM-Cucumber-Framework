Feature: Users Test

  Background: I am on Homepage
    And   I Login to Application
    And   I click on 'Admin' tab
    Then  I am on 'Admin' page

  @Smoke @Regression
  Scenario: Verify admin should add user successfully
    When  I click on 'Add' button
    And   I add user details 'User role', 'Employee name', 'Username', 'Status', 'password', 'Confirm Password'
    And   I click on 'Save' button
    Then  User successfully saved

  @Sanity @Regression
  Scenario: Verify search the user created and verify it
    When  I enter 'Username' into username field
    And   I select 'User Role' from dropdown
    And   I select 'Status' from dropdown
    And   I click on 'Search' button
    Then  User is in search result

  @Regression @Regression
  Scenario: Verify that admin should delete the user successfully
    When  I enter 'Username' into username field
    And   I select 'User Role' from dropdown
    And   I select 'Status' from dropdown
    And   I click on 'Search' button
    And   User is in search result
    And   I select user from result list
    And   I click on delete button
    Then  User Successfully Deleted

  @Regression
  Scenario: Search the deleted user and verify the message no record found
    When  I enter 'Username' into username field
    And   I select 'User Role' from dropdown
    And   I select 'Status' from dropdown
    And   I click on 'Search' button
    Then  I can see 'No Records Found' message