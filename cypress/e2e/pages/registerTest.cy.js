describe('Should register new User', () => {
  beforeEach(() => {
    cy.visit('/login')
  });
  it('User created a new customer', () => {
   cy.register()
  })
})