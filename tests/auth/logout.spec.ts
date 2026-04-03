import { test} from "../../fixtures/test.fixture"

test('user can log out and is redirected to the login page', async({loginPage, productsPage, loggedInStandardUser: _}) => {
    await productsPage.sidebar.openSidebarMenu()
    await productsPage.sidebar.logout()
    // await expect(page).toHaveURL('https://www.saucedemo.com/')
    await loginPage.expectLoaded()
})