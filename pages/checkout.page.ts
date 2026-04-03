import { expect, Page, Locator } from '@playwright/test';
import { HeaderComponent } from './components/header.component';

export class CheckoutPage {
    readonly page: Page;
    readonly title: Locator;
    readonly inputForm: Locator;
    readonly submitButton: Locator;
    readonly nameInput: Locator;
    readonly surnameInput: Locator;
    readonly zipCodeInput: Locator;
    readonly header: HeaderComponent;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('.title')
        this.inputForm = page.locator('.input_error.error')
        this.submitButton = page.locator('[data-test="continue"]')
        this.nameInput = page.locator('[data-test="firstName"]')
        this.surnameInput = page.locator('[data-test="lastName"]')
        this.zipCodeInput = page.locator('[data-test="postalCode"]')
        this.header = new HeaderComponent(page)
    }

    async expectCheckoutPageVisibility() {
        await expect(this.title).toHaveText('Checkout: Your Information')
    }

    async verifyFormValidations() {
        await this.submitButton.click()
        await expect(this.inputForm.first()).toHaveCSS('border-bottom-color', 'rgb(226, 35, 26)')
    }

    async completeFormAndProceed(name: string, surname: string, zipZode: string) {
        await this.nameInput.fill(name)
        await this.surnameInput.fill(surname)
        await this.zipCodeInput.fill(zipZode)
        await this.submitButton.click()
    }
}