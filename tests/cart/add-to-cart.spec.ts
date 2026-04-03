import {test} from "../../fixtures/test.fixture"

test('user can add product to cart and see number of added products', async({productsPage, loggedInStandardUser: _}) => {
    await productsPage.addToCart()
    await productsPage.expectNumberOfProductsInCart(1)
})