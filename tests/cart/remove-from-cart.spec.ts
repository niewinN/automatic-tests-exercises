import {test} from "../../fixtures/test.fixture"

test('user can remove product from the cart and see correct number of added products', async ({productsPage, loggedInStandardUser: _}) => {
    await productsPage.addToCart()
    await productsPage.removeProductFromCart()
    await productsPage.expectNumberOfProductsInCart(0)
})