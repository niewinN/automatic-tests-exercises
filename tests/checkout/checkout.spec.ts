import {test} from "../../fixtures/test.fixture"

test('user can proceed from cart to checkout page', async ({productsPage, cartPage, checkoutPage, loggedInStandardUser: _}) => {
    await productsPage.addToCart()
    await productsPage.redirectToCartPage()
    await cartPage.redirectToCheckoutPage()
    await checkoutPage.expectCheckoutPageVisibility()
})