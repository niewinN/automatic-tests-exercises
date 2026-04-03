import { standardUser } from "../../data/users"
import {test} from "../../fixtures/test.fixture"


test('user can sort products by price low to high', async({loginPage, productsPage}) => {
    await loginPage.goto()
    await loginPage.login(standardUser.username, standardUser.password)
    await productsPage.sortProductsByPriceLowToHigh()
    await productsPage.expectProductsSortedByPriceLowToHigh()
})