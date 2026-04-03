import { expect, Page, Locator } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly nameOfProduct: Locator;
    readonly priceOfProduct: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameOfProduct = page.locator('.cart_item .inventory_item_name')
        this.priceOfProduct = page.locator('.cart_item .inventory_item_price')
        this.checkoutButton = page.locator('[data-test="checkout"]')
    }

    async expectProductVisibleInCart(name: string) {
        await expect(this.nameOfProduct).toHaveText(name);
    }

    async expectInfoAboutAddedProduct(name: string, price: string) {
        await expect(this.nameOfProduct).toHaveText(name)
        await expect(this.priceOfProduct).toHaveText(price)
    }

    async redirectToCheckoutPage() {
        await this.checkoutButton.click()
    }

}