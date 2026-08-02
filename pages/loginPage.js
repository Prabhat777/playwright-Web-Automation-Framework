class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput = page.locator("input[formcontrolname='email']");
    this.passwordInput = page.locator("input[formcontrolname='password']");
    this.loginButton = page.locator("button[aria-label='LOG IN']");
  }

  // Actions (methods)
  async goto() {
    await this.page.goto("https://guardspro-client-uat.azurewebsites.net/login");
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };