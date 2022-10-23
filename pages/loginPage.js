import { Selector, t } from "testcafe";
import { dynamicData } from "../data/dynamicData";
class LoginPage {
  constructor() {
    this.loginLink = Selector('[class="ico-login"]');
    this.emailField = Selector('[id="Email"]');
    this.passwordField = Selector('[id="Password"]');
    this.loginBtn = Selector('[class="button-1 login-button"]');
  }

  async goToLoginSection() {
    await t.click(this.loginLink);
  }

  async login() {
    await t
      .typeText(this.emailField, dynamicData.email)
      .typeText(this.passwordField, dynamicData.password)
      .click(this.loginBtn);
  }
}
export default new LoginPage();
