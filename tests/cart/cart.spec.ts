import {test} from "../../fixtures/test.fixture"
import { standardUser } from "../../data/users"
import { backpack } from "../../data/products"

test('user can add product to cart and see this product in cart page', async({loginPage, productsPage, cartPage}) => {
    await loginPage.goto()
    await loginPage.login(standardUser.username, standardUser.password)
    await productsPage.addToCart()
    await productsPage.redirectToCartPage()
    await cartPage.expectProductVisibleInCart(backpack.name)
})

test('user can see correct information about added product in cart page', async({loginPage, productsPage, cartPage}) => {
    await loginPage.goto()
    await loginPage.login(standardUser.username, standardUser.password)
    const product = await productsPage.getBackPackData()
    await productsPage.addToCart()
    await productsPage.redirectToCartPage()
    await cartPage.expectInfoAboutAddedProduct(product.name, product.price)
})