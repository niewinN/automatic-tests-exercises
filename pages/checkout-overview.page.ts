import { expect, Page, Locator } from '@playwright/test';

export class CheckoutOverviewPage {
    readonly page: Page;
    readonly title: Locator;
    readonly finishButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('[data-test="title"]')
        this.finishButton = page.locator('[data-test="finish"]')
    }

    async expectCheckoutOverwiewLoaded() {
        await expect(this.title).toHaveText('Checkout: Overview')
    }

    async redirectToSuccessScreen() {
        await this.finishButton.click()
    }
}