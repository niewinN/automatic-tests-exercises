import { Page, Locator, expect } from '@playwright/test';

export class SidebarComponent {
    readonly page: Page;
    readonly burgerButton: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.burgerButton = page.locator('.bm-burger-button')
        this.logoutButton = page.locator('[data-test="logout-sidebar-link"]')
    }

    async openSidebarMenu() {
        await this.burgerButton.click()
        await expect(this.logoutButton).toBeVisible()
    }

    async logout() {
        await this.logoutButton.click()
    }
}