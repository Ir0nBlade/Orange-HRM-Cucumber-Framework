package com.orangehrmlive.demo.pages;

import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "txtUsername")
    WebElement username;

    @CacheLookup
    @FindBy(id = "txtPassword")
    WebElement password;

    @CacheLookup
    @FindBy(id = "btnLogin")
    WebElement loginBtn;

    @CacheLookup
    @FindBy(xpath = "//div[text()='LOGIN Panel']")
    WebElement loginPanelTxt;

    public void loginToApplicaiton(String usrname, String passwd){

        sendTextToElement(username, usrname);
        log.info("Entering Username  " + username.toString());
        sendTextToElement(password, passwd);
        log.info("Entering Password  " + password.toString());
        clickOnElement(loginBtn);
        log.info("Clicking on Login button  " + loginBtn.toString());
    }

    public void verifyLoginPaneltext(String text){
        verifyThatTextIsDisplayed(loginPanelTxt, text);
        log.info("Verifying 'LOGIN Panel' text  " + loginPanelTxt.toString());
    }
}
