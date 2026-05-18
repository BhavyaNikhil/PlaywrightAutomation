# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoBlazeTest.spec.js >> Demo Blaze Tests
- Location: tests\DemoBlazeTest.spec.js:5:5

# Error details

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for locator('#nameofuser') to be visible
    6 × locator resolved to hidden <a href="#" id="nameofuser" class="nav-link"></a>

```

# Test source

```ts
  1  | export class BasePage{
  2  |     constructor(page){
  3  |         this.page = page;
  4  |     }
  5  | 
  6  |     //web element methods
  7  |     async clickElement(locator){
  8  |         await locator.waitFor({state:'visible'});
  9  |         await locator.click();
  10 |     }
  11 |     async fillElement(locator, value){
  12 |         await locator.fill(value);
  13 |     }
  14 |     async getTextofElement(locator){
> 15 |         await locator.waitFor({state:'visible'});
     |                       ^ Error: locator.waitFor: Test ended.
  16 |         return await locator.textContent();
  17 |     }
  18 |     async waitForPageLoad(){
  19 |         await this.page.waitForLoadState('domcontentloaded');
  20 |     }
  21 | }
```