import { expect, Page, Locator } from '@playwright/test';

export class SuccessPage {
    readonly page: Page;
    readonly title: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('[data-test="title"]')
    }

    async expectSuccessPageVisibility() {
        await expect(this.title).toHaveText('Checkout: Complete!')
    }
}