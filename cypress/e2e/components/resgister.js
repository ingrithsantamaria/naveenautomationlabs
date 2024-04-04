import { faker } from "@faker-js/faker";
export class Register {
    elements  = {
        getContinueBtn: () => cy.contains('a', 'Continue'),
        getFirstNameField: () => cy.get('input#input-firstname'),
        getLastNameField: () => cy.get('input#input-lastname'),
        getEmailField: () => cy.get('input#input-email'),
        getTelephoneFiled: () => cy.get('input#input-telephone'),
        getPasswordField: () => cy.get('input#input-password'),
        getPassConfirmField: () => cy.get('input#input-confirm'),
        getPrivacyCheckBox: () => cy.get('input[name="agree"]'),
        getSubmitBtn: () => cy.get('input[type="submit"]'),
        getSearchField: () => cy.get('input[name="search"]'),
        getSearchBtn: () => cy.get('.input-group-btn button'),
        getProductsFound: () => cy.get('div.product-thumb'),
        getMyAccountBtn: () => cy.get('a[title="My Account"]'),
        getListOptions: ()=> cy.get('ul li')
    }
    constructor() {
        const email = faker.internet.email()
        const password = faker.internet.password()
        this.getFirstNameField = faker.person.firstName()
        this.getLastNameField = faker.person.lastName()
        this.getEmailField = email
        this.getTelephoneFiled = faker.phone.number()
        this.getPasswordField = password
    }
    createNewUser = () => {
        this.elements.getContinueBtn().should('be.visible').click()
        cy.url().should('contains', 'register')
    }
    fillOutRegisterNewUser = () => {
        this.elements.getFirstNameField().type(this.getFirstNameField)
        this.elements.getLastNameField().type(this.getLastNameField)
        this.elements.getEmailField().type(this.getEmailField)
        this.elements.getTelephoneFiled().type(this.getTelephoneFiled)
        this.elements.getPasswordField().type(this.getPasswordField)
        this.elements.getPassConfirmField().type(this.getPasswordField)
        this.elements.getPrivacyCheckBox().click()
        this.elements.getSubmitBtn().click()
    }
    redirectHome = () => {
        this.elements.getContinueBtn().should('be.visible').click()
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