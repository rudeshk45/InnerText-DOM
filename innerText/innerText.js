
import { should } from 'chai'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import innerTextPOM from './innerTextPOM'
import innerText from './innerTextPOM'
//const button = 
Given('I successfully browse to the application', () => {

    innerTextPOM.openApp()

})

When('I navigated to the URL', () => {

    innerTextPOM.urlOpen()

})

Then('I should see the home page', ()=> {

    innerTextPOM.homePage()
    cy.readFile('sample.txt').should('exist')
    cy.readFile('sample.txt').should('contain','CodenBox')
    
    
})