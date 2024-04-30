import { Register } from "../components/resgister"
import { Login } from "../components/login";
const login = new Login()
const register = new Register()
describe('Should register new User', () => {
  beforeEach(() => {
    cy.visit('/login')
  });
  it('User created a new customer', () => {
   cy.register()
  })
})