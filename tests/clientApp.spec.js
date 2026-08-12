const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const dataset = JSON.parse(JSON.stringify(require('../utils/placeorder.json')));

test.only('Client App Login', async ({ page }) => {

    // Login Form Page 
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(dataset.username, dataset.password);


    // Dashboard Page 
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.validateCartAction(dataset.productName);

    // Validate in Cart Page 
    const cartPage = new CartPage(page);
    await cartPage.validateProductOnCartPage(dataset.productName);

    // Checkout Page 
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.validateProductCheckout();


})



