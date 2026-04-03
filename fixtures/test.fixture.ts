import {test as base, expect} from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ProductsPage } from '../pages/products.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { CheckoutOverviewPage } from '../pages/checkout-overview.page';
import { SuccessPage } from '../pages/success.page';
import { standardUser } from '../data/users';

type Fixtures = {
    loginPage: LoginPage;
    productsPage: ProductsPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    checkoutOverviewPage: CheckoutOverviewPage;
    successPage: SuccessPage;
    loggedInStandardUser: void;
}

export const test = base.extend<Fixtures>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },

    productsPage: async ({page}, use) => {
        await use(new ProductsPage(page));
    },

    cartPage: async ({page}, use) => {
        await use(new CartPage(page));
    },

    checkoutPage: async ({page}, use) => {
        await  use(new CheckoutPage(page))
    },

    checkoutOverviewPage: async({page}, use) => {
        await use(new CheckoutOverviewPage(page))
    },

    successPage: async({page}, use) => {
        await use(new SuccessPage(page))
    },

    loggedInStandardUser: async({loginPage}, use) => {
        await loginPage.goto()
        await loginPage.login(standardUser.username, standardUser.password)
        await use()
    }
})

export {expect};