import BasePage from '../pages/BasePage'
import { Company_Logo_Name } from '../../../config'
export default class HomePage extends BasePage {

    static verifySuccessfulLogin() {
        cy.contains('Overview').should('be.visible')
    }
    static VerifyQAAssesmentAccount() {
        cy.contains('QA Assessment Account').should('be.visible')

    }
    static ClickonMenubar() {
        cy.get('#menuToggler').click()

    }
    static verifyDashBoard() {
        cy.contains('Dashboard').should('be.visible')
    }

    static verifyMarketPlace() {
        cy.contains('marketplace').should('be.visible')
    }
    static verifyAccount() {
        cy.contains('Account').should('be.visible')
    }

    static VerifyButtomHelp() {
        cy.get('.btnHelp').should('be.visible')
    }
    
    static VerifyLogo() {
        cy.get('.logo').should('be.visible')
        cy.get('.logo').then(function (Logo) {
            var LogoText = Logo.text()
            cy.log("Name of Company Logo is : " + LogoText)
           // expect(LogoText).to.equal(Company_Logo_Name)
        })
    }
    static selectDashBoard() {
        cy.get('.left-side-nav > :nth-child(1)').click()
    }

    static selectMarketPlace() {
        cy.get('.left-side-nav > :nth-child(2)').click()
    }
    static selectAccount() {
        cy.get('.left-side-nav > :nth-child(3)').click()
    }

    static SelectQAAssesmentAccount() {
        cy.get('.user-name').click()

    }
    static clickOnEditProfile() {
        cy.get('.usrDropdwonHolder').invoke('show')
        cy.contains('Edit profile').click({force: true})
    }
    static clickOnLogout() {
        cy.get('.usrDropdwonHolder').invoke('show')
        cy.contains('Log out').click({force: true})
    }

    static setUserLanguagetoDuetsch(){
        cy.get('.box_languages > :nth-child(3) > input').check()
    }
    static setUserLanguagetoEnglish(){
        cy.get('.box_languages > :nth-child(4) > input').check()
    }
    static saveLanguageChange(){
        cy.get('.eventSubmit > input').click()
    }
    static successMessageAfterLanguageChage(){
        cy.get('.flash-message').then(function (message) {
            var messageText = message.text()
            cy.log("Message After changing Language to Deutsch : " + messageText)
        })
    }
    static VerifySuccessfulLogout(){
        cy.url().should('include', '/login')
    }
}