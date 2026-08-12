const { expect } = require('@playwright/test');


class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.checkoutButton = page.getByRole("button", { name: 'Checkout' });
        this.couponCode = page.locator("//input[@name='coupon']");
        this.countryDropdown = page.getByPlaceholder("Select Country");
        this.countryCode = page.locator('.ta-results').getByText(' India', { exact: true });
    }

    async validateProductCheckout() {
        await this.checkoutButton.click();
        await this.page.locator('.field').filter({ hasText: 'Name on Card ' }).locator('input').fill('Prabhat Singh');
        await this.couponCode.fill('rahulshettyacademy');
        await this.countryDropdown.pressSequentially("ind");

        await this.countryCode.click();

    }
}

module.exports = { CheckoutPage };