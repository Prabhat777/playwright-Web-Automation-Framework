const { test, expect } = require('@playwright/test');

test.only('Client App Login', async ({ page }) => {

    // Login Form Page 
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder("email@example.com").fill("prabhat.singh@gmail.com");
    await page.locator("//input[@id='userPassword']").fill("Password@12345");
    await page.locator("//input[@type='submit']").click();
    await expect(page.getByText("Login Successfully")).toBeVisible();

    // Dashboard Page 
    await page.waitForLoadState("networkidle");
    const products = await page.locator(".card-body");
    const count = await products.count();
    const productName = "ZARA COAT 3";

    for (let i = 0; i < count; i++) {
        if (await products.nth(i).locator("b").textContent() === productName) {
            await products.nth(i).getByRole("button", { name: ' Add To Cart' }).click();
            break;
        }
    }

    await expect(page.getByText("Product Added To Cart")).toBeVisible();

    // Validate in Cart Page 
    await page.locator("[routerlink*='/cart']").click();
    await page.locator("div li").first().waitFor();
    await expect(
        page.locator("h3").filter({ hasText: productName })
    ).toBeVisible();

    // Checkout Page 
    await page.getByRole("button", { name: 'Checkout' }).click();
    await page.locator('.field').filter({ hasText: 'Name on Card ' }).locator('input').fill('Prabhat Singh');
    await page.locator("//input[@name='coupon']").fill('rahulshettyacademy');
    await page.getByPlaceholder("Select Country").pressSequentially("ind");

    await page.locator('.ta-results').getByText(' India', { exact: true }).click();

    //testing

})