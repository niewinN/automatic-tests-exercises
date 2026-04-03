import {test} from "../../fixtures/test.fixture"
import { backpack } from "../../data/products"

test('user can add product to cart and see this product in cart page', async({productsPage, cartPage, loggedInStandardUser: _}) => {
    await productsPage.addToCart()
    await productsPage.redirectToCartPage()
    await cartPage.expectProductVisibleInCart(backpack.name)
})

test('user can see correct information about added product in cart page', async({loginPage, productsPage, cartPage, loggedInStandardUser: _}) => {
    const product = await productsPage.getBackPackData()
    await productsPage.addToCart()
    await productsPage.redirectToCartPage()
    await cartPage.expectInfoAboutAddedProduct(product.name, product.price)
})