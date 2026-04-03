import { standardUser } from "../../data/users"
import {test} from "../../fixtures/test.fixture"


test('user proceed without completing checkout form', async({loginPage, productsPage, cartPage, checkoutPage}) => {
    await loginPage.goto()
    await loginPage.login(standardUser.username, standardUser.password)
    await productsPage.addToCart()
    await productsPage.redirectToCartPage()
    await cartPage.redirectToCheckoutPage()
    await checkoutPage.verifyFormValidations()
})