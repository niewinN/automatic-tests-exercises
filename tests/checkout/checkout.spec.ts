import { standardUser } from "../../data/users"
import {test} from "../../fixtures/test.fixture"

test('user can proceed from cart to checkout page', async ({loginPage, productsPage, cartPage, checkoutPage}) => {
    await loginPage.goto()
    await loginPage.login(standardUser.username, standardUser.password)
    await productsPage.addToCart()
    await productsPage.redirectToCartPage()
    await cartPage.redirectToCheckoutPage()
    await checkoutPage.expectCheckoutPageVisibility()
})