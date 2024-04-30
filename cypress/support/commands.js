import { Login } from "../e2e/components/login";
import { Register } from "../e2e/components/resgister";
const login = new Login();
const register = new Register();

Cypress.Commands.add("login", (email, password) => {
  login.LoginFromLogin();
  login.searchByWord();
  login.validateSearchResults();
  login.logout();
});
Cypress.Commands.add("register", () => {
  register.createNewUser();
  register.fillOutRegisterNewUser();
  register.redirectHome();
  register.searchByWord();
  register.validateSearchResults();
  register.logout();
});
