# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoBlazeTest.spec.js >> Demo Blaze Tests
- Location: tests\DemoBlazeTest.spec.js:5:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('#nameofuser')
Expected: visible
Received: hidden

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#nameofuser')
    4 × locator resolved to <a href="#" id="nameofuser" class="nav-link"></a>
      - unexpected value "hidden"

```

# Test source

```ts
  1  | import { expect } from "allure-playwright";
  2  | 
  3  | export class BasePage{
  4  |     constructor(page){
  5  |         this.page = page;
  6  |     }
  7  | 
  8  |     //web element methods
  9  |     async clickElement(locator){
  10 |         await expect(locator).toBeVisible();
  11 |         await locator.click();
  12 |     }
  13 |     async fillElement(locator, value){
  14 |         await locator.fill(value);
  15 |     }
  16 |     async getTextofElement(locator){
> 17 |         await expect(locator).toBeVisible();
     |                               ^ Error: expect(locator).toBeVisible() failed
  18 |         return await locator.textContent();
  19 |     }
  20 |     async waitForPageLoad(){
  21 |         await this.page.waitForLoadState('domcontentloaded');
  22 |     }
  23 | }
```