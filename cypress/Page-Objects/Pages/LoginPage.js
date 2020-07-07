import BasePage from '../pages/BasePage'
export default class LoginPage extends BasePage {

    static loginUser(username, password) {
        cy.login(username, password)
    }

    static VerifyLoginPage() {
        cy.url().should('include', '/login')
    }
    

    static forgotPassword() {
        cy.contains('Forgot password?').click()
    }

    static errorMessage() {
        cy.isVisible('#LoginForm_password_em_')
    }

    static doLogout() {
        cy.contains('Abmelden').click({ force: true })
    }

    static VerifyingLogout() {
        cy.url().should('include', '/account/login')
    }

}