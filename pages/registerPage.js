import { Selector, t } from "testcafe";
import utils from "../support/utils";
import helper from "../support/helper";
import { dynamicData } from "../data/dynamicData";
class RegisterPage {
  constructor() {
    this.gender = Selector(
      `[id="gender"]>span:nth-child(${utils.genderIndex})>input`);
    this.firstNameField = Selector('[id="FirstName"]');
    this.lastNameField = Selector('[id="LastName"]');
    this.dayDropDown = Selector('[name="DateOfBirthDay"]');
    this.monthDropDown = Selector('[name="DateOfBirthMonth"]');
    this.yearDropDown = Selector('[name="DateOfBirthYear"]');
    this.emailField = Selector('[id="Email"]');
    this.companyField = Selector('[id="Company"]');
    this.passwordField = Selector('[id="Password"]');
    this.confirmPasswordField = Selector('[id="ConfirmPassword"]');
    this.registerBtn = Selector('[id="register-button"]');
    this.registerSuccessMessage = Selector('[class="result"]')
    this.continueBtn = Selector('[class="button-1 register-continue-button"]')
  }

  async selectGender() {
    await t.click(this.gender);
  }

  async insertFirstName() {
    await t.typeText(this.firstNameField, utils.firstName);
  }

  async insertLastName() {
    await t.typeText(this.lastNameField, utils.lastName);
  }

  async selectDay() {
    await helper.selectOption(this.dayDropDown);
  }

  async selectMonth() {
    await helper.selectOption(this.monthDropDown);
  }

  async selectYear() {
    await helper.selectOption(this.yearDropDown);
  }

  async insertEmail() {
    await t.typeText(this.emailField, dynamicData.email);
  }

  async insertCompany() {
    await t.typeText(this.companyField, utils.company);
  }

  async insertPassword() {
    await t.typeText(this.passwordField, dynamicData.password);
  }

  async insertConfirmPassword() {
    await t.typeText(this.confirmPasswordField, dynamicData.password);
  }

  async clickOnRegisterBtn() {
    await t.click(this.registerBtn);
  }

  async fillRegistrationForum() {
    await this.selectGender();
    await t.expect(this.gender.checked).eql(true)
    await this.insertFirstName();
    await this.insertLastName();
    await this.selectDay();
    await this.selectMonth();
    await this.selectYear();
    await this.insertEmail();
    await this.insertCompany();
    await this.insertPassword();
    await this.insertConfirmPassword();
    await this.clickOnRegisterBtn();
  }

  async getSuccessMessage(){
    let text = await this.registerSuccessMessage.innerText;
    return text
  }

  async clickOnContinueBtn(){
    await t.click(this.continueBtn)
  }

}
export default new RegisterPage();
