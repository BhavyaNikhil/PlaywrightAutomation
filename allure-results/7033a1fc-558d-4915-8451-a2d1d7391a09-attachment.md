# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoBlazeTest.spec.js >> Demo Blaze Tests
- Location: tests\DemoBlazeTest.spec.js:5:5

# Error details

```
Error: toBeVisible can be only used with Locator object
```

# Test source

```ts
  1  | import { allure } from 'allure-playwright';
  2  | import{test,expect} from '../core/customTest'; //you are using YOUR custom test and not PW test
  3  | import testData from '../test-data/demoBlazeData.json';
  4  | 
  5  | test('Demo Blaze Tests', async({page,pages})=>{
  6  |     //params
  7  |     const username = testData.username;
  8  |     const password = testData.password;
  9  |     const productName = testData.productName; 
  10 | 
  11 |     await allure.step('Create a user with Sign Up', async() => {
  12 |         await pages.signUpPage.clickSignUp(); //Page Object Container Pattern
  13 |         await pages.signUpPage.createUser(username,password);
  14 |     })
  15 |     
  16 |     await allure.step('Login with created user', async() => {
  17 |         await pages.loginPage.loginCreatedUser(username,password);
  18 |     })
  19 |     
  20 |     allure.step('Landing in Home Page and selecting a product', async() => {
  21 |         const welcomeMsg = pages.homePage.welcomeMessage(); // no await — returns Locator
> 22 |         await expect(welcomeMsg).toBeVisible();
     |                                  ^ Error: toBeVisible can be only used with Locator object
  23 |         await expect(welcomeMsg).toContainText(username); // toContainText, not toContain
  24 |         await pages.homePage.selectProduct(productName);
  25 |     })
  26 |     
  27 |     allure.step('Landing in Cart Page', async() => {
  28 |         await pages.cartPage.addToCart();
  29 |     })
  30 | });
```