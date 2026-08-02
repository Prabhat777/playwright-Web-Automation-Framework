const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');


test('Success Login Test', async({browser})=> {
    const context = await browser.newContext();     // This means to open a particular browser session/window
    const page = await context.newPage();           // This means to open a new tab in that same browser window  
    
    // Navigate to the Webpage and validate the url 
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); 
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await expect(page).toHaveURL("https://rahulshettyacademy.com/loginpagePractise/");

    
    // Fill the form 
    await page.locator('#username').fill("rahulshettyacademy");
    await page.locator('#password').fill("Learning@830$3mK2");
    await page.locator("input[id='signInBtn']").click();
    //await expect(page.locator(".card-body a").nth(0)).toHaveText("iphone X");  // you can use .first as well instead of .nth(0)

    await page.locator('.card-body a').nth(0).waitFor();        // this will make sure that it waits until atleast one element gets loaded or is visible to exxtract the text
    console.log(await page.locator(".card-body a").allTextContents());   // this will return an empty array since the elements are not yet loaded before it is trying to extract the text
  
});

test('UI Controls Assertions Test', async({browser})=> {
    const context = await browser.newContext();     // This means to open a particular browser session/window
    const page = await context.newPage();           // This means to open a new tab in that same browser window  
    
    // Navigate to the Webpage and validate the url 
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); 
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await expect(page).toHaveURL("https://rahulshettyacademy.com/loginpagePractise/");

    
    // Fill the form 
    await page.locator('#username').fill("rahulshettyacademy");
    await page.locator('#password').fill("Learning@830$3mK2");
    const dropdown = page.locator('select.form-control');
    await dropdown.selectOption("consult");
    await page.locator("input[value='user']").click();
    await page.locator("button#okayBtn").click();
    await expect(page.locator("input[value='user']")).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();

    // if you want to uncheck a checkbox that has already been checked then 
    await page.locator("#terms").uncheck();
   // page.pause();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(page.locator("[href*='documents-request']")).toHaveAttribute("class", "blinkingText");
    await page.locator("[href*='documents-request']").click();
    page.pause();
    //await page.locator("input[id='signInBtn']").click();

});

test('Window Handling Test', async({browser})=> {
    const context = await browser.newContext();     // This means to open a particular browser session/window
    const page = await context.newPage();           // This means to open a new tab in that same browser window  
    
    // Navigate to the Webpage and validate the url 
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); 
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await expect(page).toHaveURL("https://rahulshettyacademy.com/loginpagePractise/");
   
   
    const [childPage] = await Promise.all([
        context.waitForEvent('page'),                               // it looks for string as an arguement and not the variable 
        await page.locator("[href*='documents-request']").click(),
   ]);

   const text = await childPage.locator(".red").textContent();
   console.log(text);
   const arr = text.split("@");
   const domain = arr[1].split(" ")[0];

   await page.locator('#username').fill(domain);            // here you have switched back to parent window

   
   console.log(await page.locator('#username').textContent());   // this will not return anything since it has been added programatically and was not attached to the dom
   console.log(await page.locator('#username').inputValue());   // This will return any text typed in an input or text area field
    
});

    
test('Second Playwright Test', async({page}) => {

    await page.goto("https://www.google.com/");

    //Assertions 
    await expect(page).toHaveTitle("Google");

});


//     fill()
// What it does: Clears the existing value and directly sets the new value.
// Speed: Fast (no typing simulation)
// Events: Triggers minimal events (like input)
// Best for: Simple form filling where typing behavior doesn't matter

// type()
// What it does: Types text character by character
// Speed: Slower (can simulate delay between keystrokes)
// Events: Triggers full keyboard events (keydown, keypress, keyup)
// Best for: When UI behavior depends on typing (e.g., autocomplete, live validation)


