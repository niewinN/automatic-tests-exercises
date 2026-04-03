import { test, expect, Page, Locator } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly title: Locator;
    readonly addToCartButton: Locator;
    readonly numberOfProductsInCard: Locator;
    readonly removeFromCartButton: Locator;
    readonly cartIcon: Locator;
    readonly nameOfProduct: Locator;
    readonly priceOfProduct: Locator;
    readonly backpackCard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('.title')
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.numberOfProductsInCard = page.locator('[data-test="shopping-cart-badge"]')
        this.removeFromCartButton = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.cartIcon = page.locator('#shopping_cart_container')
        this.nameOfProduct = page.locator('[data-test="item-4-title-link"]')
        this.backpackCard = page.locator('.inventory_item').filter({
            has: page.getByText('Sauce Labs Backpack')
        })
        this.priceOfProduct = this.backpackCard.locator('.inventory_item_price')
    }

    async expectLoaded() {
        await expect(this.title).toHaveText('Products');
    }

    async addToCart() {
        await this.addToCartButton.click()
    }

    async expectNumberOfProductsInCart(count: number) {
        if (count === 0) {
            await expect(this.numberOfProductsInCard).toHaveCount(0)
            return;
        }

        await expect(this.numberOfProductsInCard).toHaveText(String(count))
    }

    async removeProductFromCart() {
        await this.removeFromCartButton.click()
    }

    async redirectToCartPage() {
        await this.cartIcon.click()
    }

    async getBackPackData() {
        const name = await this.nameOfProduct.textContent()
        const price = await this.priceOfProduct.textContent()

        if (!name || !price) {
            throw new Error('Backpack data not found')
        }

        return {name, price}
    }
}