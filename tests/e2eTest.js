import { staticData } from "../data/staticData";
import helper, { getTitle, getUrl } from "../support/helper";
import homePage from "../pages/homePage";
import registerPage from "../pages/registerPage";
import loginPage from "../pages/loginPage";
import cellPhonePgae from "../pages/cellPhonePage";
import cartPage from "../pages/cartPage";
import checkoutPage from "../pages/checkoutPage";
import { dynamicData } from "../data/dynamicData";

fixture.meta("TS","001")("E2E test nopcommerce.com").page("./");
test("Assert home page", async (t) => {
  await helper.setEmailAndPassDynamicData();
  await t.maximizeWindow().expect(getTitle()).eql(staticData.homePageTitle);
});

test("Should registered", async (t) => {
  await homePage.goToRegistration();
  await t.expect(getUrl()).contains(staticData.registerPageUrl);
  await registerPage.fillRegistrationForum();
  await t
    .expect(await registerPage.getSuccessMessage())
    .eql(staticData.registrationSuccess);
  await registerPage.clickOnContinueBtn();
  await t.expect(await homePage.homePageLogo.visible).ok();
});

test("Should login", async (t) => {
  await loginPage.goToLoginSection();
  await loginPage.login();
  await t.expect(getTitle()).eql(staticData.homePageTitle);
});

test("Add product to the cart and checkout", async (t) => {
  await homePage.goToCellPhonePage();
  await t.expect(getUrl()).eql(staticData.cellPhonePageUrl);
  await cellPhonePgae.addProductToCart();
  await t
    .expect(await cellPhonePgae.productAddedSuccessMessage())
    .eql(staticData.productAddedToCart);
  await cellPhonePgae.goToCart();
  await t
    .expect(getUrl())
    .eql(staticData.cartPageUrl)
    .expect(await cartPage.isPriceMatched())
    .eql(dynamicData.productPrice);
  await cartPage.goToCheckoutPage();
  await loginPage.login();
  await cartPage.goToCheckoutPage();
  await checkoutPage.fillBillingAddressForum();
  await checkoutPage.continueToConfirm();
  await t.expect(getUrl()).contains(staticData.confirmOrderPageUrl);
  await t
    .expect(await checkoutPage.isPriceMatched())
    .eql(dynamicData.productPrice);
  await checkoutPage.confirmOrder();
  await t
    .expect(await checkoutPage.successMessage())
    .eql(staticData.orderSuccessMessage);
});
