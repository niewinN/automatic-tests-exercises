import {test} from "../../fixtures/test.fixture"
import { standardUser } from "../../data/users";
import { incorrectUser } from "../../data/users";

test.beforeEach(async ({loginPage}) => {
    await loginPage.goto()
})

test('user can log in and see products page', async({loginPage, productsPage}) => {
    await loginPage.login(standardUser.username, standardUser.password);
    await productsPage.expectLoaded()
});


test('user can log in with invalid credentials', async({loginPage}) => {
    await loginPage.login(incorrectUser.username, incorrectUser.password)
    await loginPage.expectErrorVisible()
})