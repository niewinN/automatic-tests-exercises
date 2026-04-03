import { Page, Locator } from '@playwright/test';

export class HeaderComponent {
    readonly page: Page;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]')
    }

    async getCartCount(): Promise<number> {
        if (await this.cartBadge.count() === 0) {
            return 0;
        }

        const countText = await this.cartBadge.textContent()

        if (!countText) {
            throw new Error('Cart badge exists but has no text')
        }

        return Number(countText)
    }

}