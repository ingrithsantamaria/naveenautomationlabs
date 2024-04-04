import { Register } from "../components/resgister"
import { Login } from "../components/login";
const login = new Login()
const register = new Register()
describe('Should register new User', () => {
  beforeEach(() => {
    cy.visit('/login')
  });
  it('User created a new customer', () => {
    register.createNewUser()
    register.fillOutRegisterNewUser()
    register.redirectHome()
    register.searchByWord()
    register.validateSearchResults()
    register.logout()
    login.login()
  })
})