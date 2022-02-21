//const button = ""

class innerTextPOM {

    static openApp() {

        cy.visit('https://codenboxautomationlab.com/')
    }

    static urlOpen() {
        cy.visit('https://codenboxautomationlab.com/')
        cy.url().should('include', 'codenboxautomationlab')
    }

    static homePage() {

        cy.get('.site-title > a').should('be.visible')
        cy.get('.site-title > a').invoke('text').then((myText) => {
           cy.log(myText)
           cy.writeFile('sample.txt', "myText")
            

        })

        // cy.get('.site-title').should('have.text', 'CodenBox AutomationLab')
        // cy.get('.site-title').should('contain', 'CodenBox')
    }



}
export default innerTextPOM