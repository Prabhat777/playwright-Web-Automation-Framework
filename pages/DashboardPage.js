const { expect } = require('@playwright/test');


class DashboardPage {

    constructor(page) {
        this.page = page;
        this.products = page.locator(".card-body");
    }

    async validateCartAction(productName) {
        const count = await this.products.count();

        for (let i = 0; i < count; i++) {
            if (await this.products.nth(i).locator("b").textContent() === productName) {
                await this.products.nth(i).getByRole("button", { name: ' Add To Cart' }).click();
                break;
            }
        }

        await expect(this.page.getByText("Product Added To Cart")).toBeVisible();

    }
}

module.exports = { DashboardPage };