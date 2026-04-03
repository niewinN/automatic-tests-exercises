import {test} from "../../fixtures/test.fixture"


test('user proceed without completing checkout form', async({productsPage, cartPage, checkoutPage, loggedInStandardUser: _}) => {
    await productsPage.addToCart()
    await productsPage.redirectToCartPage()
    await cartPage.redirectToCheckoutPage()
    await checkoutPage.verifyFormValidations()
})