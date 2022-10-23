import { Selector, t } from "testcafe";
import helper from "../support/helper";
import utils from "../support/utils";
import { getUrl } from "../support/helper";
import { staticData } from "../data/staticData";
class Checkout {
  constructor() {
    this.countryDropdown = Selector('[id="BillingNewAddress_CountryId"]');
    this.cityInput = Selector('[id="BillingNewAddress_City"]');
    this.addressInput = Selector('[id="BillingNewAddress_Address1"]');
    this.zipCodeInput = Selector('[id="BillingNewAddress_ZipPostalCode"]');
    this.phoneNumberInput = Selector('[id="BillingNewAddress_PhoneNumber"]');
    this.continueBtn = Selector('[id="billing-buttons-container"]').withText(
      "CONTINUE"
    );
    this.shippingPageContinueBtn = Selector(
      '[class="button-1 shipping-method-next-step-button"]'
    );
    this.paymentPageContinueBtn = Selector(
      '[class="button-1 payment-method-next-step-button"]'
    );
    this.paymentInfoPageContinueBtn = Selector(
      '[class="button-1 payment-info-next-step-button"]'
    );
    this.totalPrice = Selector('[class="value-summary"]>strong');
    this.confirmBtn = Selector(
      '[class="button-1 confirm-order-next-step-button"]'
    );
    this.orderSuccessMessage = Selector(
      ".checkout-data > div > div.title > strong"
    );
  }

  async fillBillingAddressForum() {
    await helper.selectOption(this.countryDropdown);
    await t
      .typeText(this.cityInput, utils.city)
      .typeText(this.addressInput, utils.address)
      .typeText(this.zipCodeInput, utils.zipCode)
      .typeText(this.phoneNumberInput, utils.phoneNumber)
      .click(this.continueBtn);
  }

  async continueToConfirm() {
    await t.expect(getUrl()).contains(staticData.shippingMethodsPageUrl);
    await this.clickOnContinueBtn(this.shippingPageContinueBtn);
    await t.expect(getUrl()).contains(staticData.paymentMethodPageUrl);
    await this.clickOnContinueBtn(this.paymentPageContinueBtn);
    await t.expect(await getUrl()).contains(staticData.paymentInfoPageUrl);
    await this.clickOnContinueBtn(this.paymentInfoPageContinueBtn);
  }

  async clickOnContinueBtn(el) {
    await t.click(el);
  }

  async isPriceMatched() {
    let price = await this.totalPrice.innerText;
    return price;
  }

  async confirmOrder() {
    await t.click(this.confirmBtn);
  }

  async successMessage() {
    let text = await this.orderSuccessMessage.innerText;
    return text;
  }
}
export default new Checkout();
