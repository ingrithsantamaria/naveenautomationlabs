describe('Should sign in', () => {
  beforeEach(() => {
    cy.visit('/login')
  });
  it('User created a new customer', () => {
    cy.login()
  })
})