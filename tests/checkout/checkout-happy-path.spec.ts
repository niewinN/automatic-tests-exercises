import {test} from "../../fixtures/test.fixture"
import { fakerPL as faker } from '@faker-js/faker'


test('user can login, add product to cart and finish order', async({productsPage, cartPage, checkoutPage, checkoutOverviewPage, successPage, loggedInStandardUser: _}) => {

    const randomName = faker.person.firstName();
    const randomSurname = faker.person.lastName()
    const randomZipCode = faker.location.zipCode()

    await productsPage.addToCart()
    await productsPage.redirectToCartPage()
    await cartPage.redirectToCheckoutPage()
    await checkoutPage.completeFormAndProceed(randomName, randomSurname, randomZipCode)
    await checkoutOverviewPage.expectCheckoutOverwiewLoaded()
    await checkoutOverviewPage.redirectToSuccessScreen()
    await successPage.expectSuccessPageVisibility()
})