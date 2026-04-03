import {test} from "../../fixtures/test.fixture"
import { standardUser } from "../../data/users"

test('user can remove product from the cart and see correct number of added products', async ({loginPage, productsPage}) => {
    await loginPage.goto()
    await loginPage.login(standardUser.username, standardUser.password)
    await productsPage.addToCart()
    await productsPage.removeProductFromCart()
    await productsPage.expectNumberOfProductsInCart(0)
})