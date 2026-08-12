const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.only('Client App Login', async ({ page }) => {

    const username = "prabhat.singh@gmail.com";
    const password = "Password@12345";
    const productName = "ZARA COAT 3";

    // Login Form Page 
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(username, password);


    // Dashboard Page 
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.validateCartAction(productName);

    // Validate in Cart Page 
    const cartPage = new CartPage(page);
    await cartPage.validateProductOnCartPage(productName);

    // Checkout Page 
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.validateProductCheckout();


})











