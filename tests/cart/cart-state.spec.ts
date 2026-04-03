import {test} from "../../fixtures/test.fixture"
import { expect } from '@playwright/test';

test('user can redirect between screens and number of products in cart is correct', async({productsPage, cartPage, checkoutPage, loggedInStandardUser: _}) => {
    await productsPage.addToCart()

    const expectedCartCount = await productsPage.header.getCartCount()

    await productsPage.redirectToCartPage()
    expect(await cartPage.header.getCartCount()).toBe(expectedCartCount)

    await cartPage.redirectToCheckoutPage()
    expect(await checkoutPage.header.getCartCount()).toBe(expectedCartCount)



})