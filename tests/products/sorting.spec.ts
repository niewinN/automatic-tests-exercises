import {test} from "../../fixtures/test.fixture"

test.describe('products sorting', () => {

    test.beforeEach(async({loggedInStandardUser: _}) => {})

    test('user can sort products by price low to high', async({productsPage}) => {
        await productsPage.sortProductsByPriceLowToHigh()
        await productsPage.expectProductsSortedByPriceLowToHigh()
    })

    test('user can sort products by name Z to A', async({ productsPage}) => {
        await productsPage.sortProductsByNameZToA()
        await productsPage.expectProductsSortedByNameZToA()
    })
})

