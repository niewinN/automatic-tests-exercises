import { standardUser } from "../../data/users"
import {test} from "../../fixtures/test.fixture"
import { fakerPL as faker } from '@faker-js/faker'


test('user can login, add product to cart and finish order', async({loginPage, productsPage, cartPage, checkoutPage, checkoutOverviewPage, successPage}) => {

    const randomName = faker.person.firstName();
    const randomSurname = faker.person.lastName()
    const randomZipCode = faker.location.zipCode()


    await loginPage.goto()
    await loginPage.login(standardUser.username, standardUser.password)
    await productsPage.addToCart()
    await productsPage.redirectToCartPage()
    await cartPage.redirectToCheckoutPage()
    await checkoutPage.completeFormAndProceed(randomName, randomSurname, randomZipCode)
    await checkoutOverviewPage.expectCheckoutOverwiewLoaded()
    await checkoutOverviewPage.redirectToSuccessScreen()
    await successPage.expectSuccessPageVisibility()
})