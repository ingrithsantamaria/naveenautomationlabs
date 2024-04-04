export class Login {
    elements = {
        getMyAccountBtn: () => cy.get('a[title="My Account"]'),
        getListOptions: ()=> cy.get('ul li'),
        getEmailField: () => cy.get('input#input-email'),
        getPasswordField: () => cy.get('input#input-password'),
        getLoginBtn: () => cy.get('input[value="Login"]'),
        getSearchField: () => cy.get('input[name="search"]'),
        getSearchBtn: () => cy.get('.input-group-btn button'),
        getProductsFound: () => cy.get('div.product-thumb'),
        getContinueBtn: () => cy.contains('a', 'Continue'),

    }
    loginFromRegistration = () => {
        this.elements.getMyAccountBtn().should('be.visible').click()
        this.elements.getListOptions().find('a[href="https://naveenautomationlabs.com/opencart/index.php?route=account/login"]').click()
    }
    LoginFromLogin = () => {
        this.elements.getEmailField().type('applytesters@mydomain.com')
        this. elements.getPasswordField().type('Apply123!!!')
        this.elements.getLoginBtn().click()
    }
    searchByWord = () => {
        const word = 'Macbook'
        this.elements.getSearchField().type(word)
        this.elements.getSearchBtn().click()
    }
    validateSearchResults = () => {
        this.elements.getProductsFound().should('be.visible')
        this.elements.getProductsFound().should('have.length.at.least', 1)
        cy.url().should('contains', 'Macbook')
    }
    logout = () => {
        this.elements.getMyAccountBtn().should('be.visible').click()
        this.elements.getListOptions().find('a[href="https://naveenautomationlabs.com/opencart/index.php?route=account/logout"]').click()
        this.elements.getContinueBtn().click()
    }

}