/// <reference types="cypress" />
import { url, login_username, login_password } from '../../../config'
import Loginpage from '../../Page-Objects/Pages/LoginPage'
import Homepage from '../../Page-Objects/Pages/HomePage'

describe('Login to Application', () => {
    before(function () {
        cy.visit(url)
    })
    it('Performing login', () => {
        Loginpage.VerifyLoginPage()
        Loginpage.loginUser(login_username, login_password)
        Loginpage.pause(1000)
    })

    it('Verifying Successful Login', () => {
        Homepage.verifySuccessfulLogin()
    })
})
describe('Verifying availability of Features', () => {
    it('Verifying Availability Help Buttom', () => {
        Homepage.VerifyButtomHelp()
    })
    it('Verifying company Logo', () => {
        Homepage.VerifyLogo()
    })
    it('Verifying Availability of QA Assement Account', () => {
        Homepage.VerifyQAAssesmentAccount()
    })
    it('Select Menubar', () => {
        Homepage.ClickonMenubar()
    })
    it('Verifying Availability of DashBoard Feature', () => {
        Homepage.verifyDashBoard()
    })
    it('Verifying Availability of MarketPlace Feature', () => {
        Homepage.verifyMarketPlace()
    })
    it('Verifying Availability of Account Feature', () => {
        Homepage.verifyAccount()
    })
})
describe('Set user to different language', () => {
    it('Click on “QA Assessment Account” and select Edit profile” from the drop down', () => {
        Homepage.SelectQAAssesmentAccount()
        Homepage.clickOnEditProfile()
    })
    it('Select different Language and Save it', () => {
        /*Application is logging out automatically in cypress  browser environment after Clicking on Edit Profile.
        if Application is not logging out after click on Edit profile in your Test Environment, then Kindly comment out Line Number 52 and run the code.
        */
        Loginpage.loginUser(login_username, login_password)
        Homepage.setUserLanguagetoDuetsch()
        Homepage.saveLanguageChange()
        Homepage.successMessageAfterLanguageChage()
        Homepage.setUserLanguagetoEnglish()
        Homepage.saveLanguageChange()
    })
})

describe('Select the Dashboard tab', () => {
    it('Select the Dashboard tab', () => {
       Homepage.ClickonMenubar()
       Homepage.selectDashBoard()
    })
})
describe('Logout the user', () => {
    it('Logout the user', () => {
        /*Application is logging out automatically in cypress  browser environment after Selecting Dash Board.
        if Application is not logging out after Selecting Dash Board in your Test Environment, then Kindly comment out Line Number 72 and run the code.
        */
        Loginpage.loginUser(login_username, login_password)
        Homepage.SelectQAAssesmentAccount()
        Homepage.clickOnLogout()
        Homepage.VerifySuccessfulLogout()
    })
})

