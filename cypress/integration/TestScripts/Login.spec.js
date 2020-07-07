/// <reference types="cypress" />
import { url, login_username, login_password } from '../../../config'
import Loginpage from '../../Page-Objects/Pages/LoginPage'
import Homepage from '../../Page-Objects/Pages/HomePage'

describe('Login Failed Test', () => {
    before(function () {
        cy.visit(url)
        
    })
    it('Performing login with invalid Username and Valid Password', () => {
        Loginpage.VerifyLoginPage()
        Loginpage.loginUser('abc@gmail.com', login_password)
        Loginpage.pause(2000)
    })
    it('Should Display Error Message', () => {
        Loginpage.errorMessage()

    })
    it('Performing login with invalid Password and Valid Username', () => {
        Loginpage.VerifyLoginPage()
        Loginpage.loginUser(login_username, 'Invalidpassword')
        
    })
    it('Should Display Error Message', () => {
        Loginpage.errorMessage()

    })
})

describe('Login Pass Test', () => {
    before(function () {
        cy.visit(url)
    })
    it('Performing login with valid data', () => {
        Loginpage.VerifyLoginPage()
        Loginpage.loginUser(login_username, login_password)
        Loginpage.pause(3000)
    })

    it('Verifying Successful Login', () => {
        Homepage.verifySuccessfulLogin()
    })
})
