export default class BasePage {
    static pause(ms) {
        cy.wait(ms)
    }
    static loginfo(message) {
        cy.log(message)
    }

}