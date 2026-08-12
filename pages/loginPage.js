const { expect } = require('@playwright/test');


class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput = page.getByPlaceholder("email@example.com");
    this.passwordInput = page.locator("//input[@id='userPassword']");
    this.loginButton = page.locator("//input[@type='submit']");
  }

  // Actions (methods)
  async goto() {
    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await expect(this.page.getByText("Login Successfully")).toBeVisible();
    await this.page.waitForLoadState("networkidle");
  }
}

module.exports = { LoginPage };