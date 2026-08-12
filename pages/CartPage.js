const { expect } = require('@playwright/test');


class CartPage {

    constructor(page) {
        this.page = page;
        this.cartLink = page.locator("[routerlink*='/cart']");
    }

    async validateProductOnCartPage(productName) {
        this.cartLink.click();
        await this.page.locator("div li").first().waitFor();
        await expect(
            this.page.locator("h3").filter({ hasText: productName })
        ).toBeVisible();

    }
}

module.exports = { CartPage };