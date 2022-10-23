import { Selector, t } from "testcafe";

class CartPage {
  constructor() {
    this.totalPrice = Selector('[class="value-summary"]>strong');
    this.agreeCheckbox = Selector('[id="termsofservice"]');
    this.checkoutBtn = Selector('[id="checkout"]');
  }

  async isPriceMatched() {
    let price = await this.totalPrice.innerText;
    return price;
  }

  async goToCheckoutPage() {
    await t.click(this.agreeCheckbox).click(this.checkoutBtn);
  }
}
export default new CartPage();
