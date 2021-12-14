$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/UsersTest.feature");
formatter.feature({
  "line": 1,
  "name": "Users Test",
  "description": "",
  "id": "users-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4044131200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I Login to Application",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I click on \u0027Admin\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I am on \u0027Admin\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersTest.iLoginToApplication()"
});
formatter.result({
  "duration": 2607184300,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iClickOnAdminTab()"
});
formatter.result({
  "duration": 966747800,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iAmOnAdminPage()"
});
formatter.result({
  "duration": 20941000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify admin should add user successfully",
  "description": "",
  "id": "users-test;verify-admin-should-add-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Smoke"
    },
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I click on \u0027Add\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I add user details \u0027User role\u0027, \u0027Employee name\u0027, \u0027Username\u0027, \u0027Status\u0027, \u0027password\u0027, \u0027Confirm Password\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \u0027Save\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User successfully saved",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersTest.iClickOnAddButton()"
});
formatter.result({
  "duration": 420339100,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iAddUserDetailsUserRoleEmployeeNameUsernameStatusPasswordConfirmPassword()"
});
formatter.result({
  "duration": 11400,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iClickOnSaveButton()"
});
formatter.result({
  "duration": 39648300,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.userSuccessfullySaved()"
});
formatter.result({
  "duration": 17702700,
  "status": "passed"
});
formatter.after({
  "duration": 584783900,
  "status": "passed"
});
formatter.before({
  "duration": 2581285300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I Login to Application",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I click on \u0027Admin\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I am on \u0027Admin\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersTest.iLoginToApplication()"
});
formatter.result({
  "duration": 2439985500,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iClickOnAdminTab()"
});
formatter.result({
  "duration": 956388600,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iAmOnAdminPage()"
});
formatter.result({
  "duration": 18953200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify search the user created and verify it",
  "description": "",
  "id": "users-test;verify-search-the-user-created-and-verify-it",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Sanity"
    },
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I enter \u0027Username\u0027 into username field",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select \u0027User Role\u0027 from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select \u0027Status\u0027 from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on \u0027Search\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User is in search result",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersTest.iEnterUsernameIntoUsernameField()"
});
formatter.result({
  "duration": 38594300,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iSelectUserRoleFromDropdown()"
});
formatter.result({
  "duration": 47000700,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iSelectStatusFromDropdown()"
});
formatter.result({
  "duration": 43792000,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iClickOnSearchButton()"
});
formatter.result({
  "duration": 316385600,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.userIsInSearchResult()"
});
formatter.result({
  "duration": 20032790100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Ananya9\u0027)]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027VIMAL\u0027, ip: \u002710.10.10.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [2a3ba995564a96ed50649e715ac62a07, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027Ananya9\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\itsvi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49864}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:49864/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2a3ba995564a96ed50649e715ac62a07\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.verifyThatTextIsDisplayed(Utility.java:331)\r\n\tat com.orangehrmlive.demo.pages.ViewSystemUsersPage.verifyUserInSearchResult(ViewSystemUsersPage.java:118)\r\n\tat com.orangehrmlive.demo.cucumber.stepdefs.UsersTest.userIsInSearchResult(UsersTest.java:76)\r\n\tat ✽.Then User is in search result(src/test/java/resources/featurefile/UsersTest.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 855808700,
  "status": "passed"
});
formatter.before({
  "duration": 2594652400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I Login to Application",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I click on \u0027Admin\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I am on \u0027Admin\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersTest.iLoginToApplication()"
});
formatter.result({
  "duration": 2553863500,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iClickOnAdminTab()"
});
formatter.result({
  "duration": 985004800,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iAmOnAdminPage()"
});
formatter.result({
  "duration": 18634600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify that admin should delete the user successfully",
  "description": "",
  "id": "users-test;verify-that-admin-should-delete-the-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Regression"
    },
    {
      "line": 23,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I enter \u0027Username\u0027 into username field",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I select \u0027User Role\u0027 from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select \u0027Status\u0027 from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on \u0027Search\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User is in search result",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select user from result list",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on delete button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User Successfully Deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersTest.iEnterUsernameIntoUsernameField()"
});
formatter.result({
  "duration": 36852500,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iSelectUserRoleFromDropdown()"
});
formatter.result({
  "duration": 40984000,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iSelectStatusFromDropdown()"
});
formatter.result({
  "duration": 43425600,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iClickOnSearchButton()"
});
formatter.result({
  "duration": 330943800,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.userIsInSearchResult()"
});
formatter.result({
  "duration": 20041814600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Ananya9\u0027)]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027VIMAL\u0027, ip: \u002710.10.10.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6232228051b3c7d93bf550073a8a7167, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027Ananya9\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\itsvi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49900}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:49900/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6232228051b3c7d93bf550073a8a7167\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.verifyThatTextIsDisplayed(Utility.java:331)\r\n\tat com.orangehrmlive.demo.pages.ViewSystemUsersPage.verifyUserInSearchResult(ViewSystemUsersPage.java:118)\r\n\tat com.orangehrmlive.demo.cucumber.stepdefs.UsersTest.userIsInSearchResult(UsersTest.java:76)\r\n\tat ✽.And User is in search result(src/test/java/resources/featurefile/UsersTest.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UsersTest.iSelectUserFromResultList()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsersTest.iClickOnDeleteButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsersTest.userSuccessfullyDeleted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 819042500,
  "status": "passed"
});
formatter.before({
  "duration": 3176631200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I Login to Application",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I click on \u0027Admin\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I am on \u0027Admin\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersTest.iLoginToApplication()"
});
formatter.result({
  "duration": 2909529700,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iClickOnAdminTab()"
});
formatter.result({
  "duration": 961159600,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iAmOnAdminPage()"
});
formatter.result({
  "duration": 18510700,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Search the deleted user and verify the message no record found",
  "description": "",
  "id": "users-test;search-the-deleted-user-and-verify-the-message-no-record-found",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I enter \u0027Username\u0027 into username field",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I select \u0027User Role\u0027 from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select \u0027Status\u0027 from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on \u0027Search\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I can see \u0027No Records Found\u0027 message",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersTest.iEnterUsernameIntoUsernameField()"
});
formatter.result({
  "duration": 36646600,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iSelectUserRoleFromDropdown()"
});
formatter.result({
  "duration": 40816600,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iSelectStatusFromDropdown()"
});
formatter.result({
  "duration": 42363900,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iClickOnSearchButton()"
});
formatter.result({
  "duration": 337114500,
  "status": "passed"
});
formatter.match({
  "location": "UsersTest.iCanSeeNoRecordsFoundMessage()"
});
formatter.result({
  "duration": 21960200,
  "status": "passed"
});
formatter.after({
  "duration": 597033900,
  "status": "passed"
});
});