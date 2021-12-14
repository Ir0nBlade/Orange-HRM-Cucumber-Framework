Feature: Login

  Background: I am on Homepage
    And   I Login to Application
    And   I click on 'Admin' tab
    Then  I am on 'Admin' page

  @Smoke @Regression
  Scenario: Verify user should login successfully
    Then I am on Dashboard

  @Sanity @Regression
  Scenario: Verify that the logo is displayed
    Then I cam see logo is dipalyed

  @Regression
  Scenario: Verify user should logout successfully
    When  I click on User Profile logo
    And   I mouse hover on 'Logout' link and click
    Then  I am successfully logged out
