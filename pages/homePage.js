import { Selector, t } from "testcafe";
class HomePage {
  constructor() {
    this.registrationLink = Selector('[class="ico-register"]');
    this.homePageLogo = Selector('[alt="nopCommerce demo store"]');
    this.phoneLink = Selector('[class="top-menu notmobile"]')
      .child("li")
      .withText("Electronic");
    this.productItem = Selector('[class="sublist first-level"]')
      .child("li")
      .withText("Cell phones");
  }

  async goToRegistration() {
    await t.click(this.registrationLink);
  }

  async goToCellPhonePage() {
    await t.hover(this.phoneLink).click(this.productItem);
  }
}
export default new HomePage();
