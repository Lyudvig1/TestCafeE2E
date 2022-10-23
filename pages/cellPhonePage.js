import { Selector, t } from "testcafe";
import utils from "../support/utils";
import { dynamicData } from "../data/dynamicData";
class CellPhonePage {
  constructor() {
    this.productListDetails = Selector('[class="details"]');
    this.successMessage = Selector('[class="content"]');
    this.cartIcon = Selector('[class="cart-label"]');
  }

  async addProductToCart() {
    let length = await this.productListDetails.count;
    let index = await utils.randomIndexProduct(length);
    let productPrice = await this.productListDetails
      .nth(index)
      .find('[class="prices"]');
    let price = await productPrice.innerText;
    dynamicData.productPrice = price;
    let product = await this.productListDetails
      .nth(index)
      .find('[class="buttons"]')
      .withText("ADD TO CART");
    await t.click(product);
  }

  async productAddedSuccessMessage() {
    let text = await this.successMessage.innerText;
    return text;
  }

  async goToCart() {
    await t.click(this.cartIcon);
  }
}
export default new CellPhonePage();
