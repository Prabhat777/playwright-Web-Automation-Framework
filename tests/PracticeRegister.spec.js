const {test, expect} = require('@playwright/test');

test('Success Login Test', async({browser})=> {
    const context = await browser.newContext();     // This means to open a particular browser session/window
    const page = await context.newPage();           // This means to open a new tab in that same browser window  
    
    // Navigate to the Webpage and validate the url 
    await page.goto("https://rahulshettyacademy.com/client/#/auth/register"); 
    await expect(page).toHaveTitle("Let's Shop");

    // Fill the form
    await page.locator("[id='firstName']").fill("Prabhat");
    await page.locator("[id='lastName']").fill("Singh");
    await page.locator("[id='userEmail']").fill("prabhat.singh@gmail.com");
    await page.locator("[id='userMobile']").fill("9892396066");
    await page.locator("[id='userPassword']").fill("Password@12345");
    await page.locator("[id='confirmPassword']").fill("Password@12345");
    await page.locator("[type='checkbox']").click();
    await page.locator("[type='submit']").click();

    await page.pause();
});