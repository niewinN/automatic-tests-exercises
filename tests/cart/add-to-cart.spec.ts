import {test} from "../../fixtures/test.fixture"
import { standardUser } from "../../data/users"

test('user can add product to cart and see number of added products', async({loginPage, productsPage}) => {
    await loginPage.goto()
    await loginPage.login(standardUser.username, standardUser.password)
    await productsPage.addToCart()
    await productsPage.expectNumberOfProductsInCart(1)
})