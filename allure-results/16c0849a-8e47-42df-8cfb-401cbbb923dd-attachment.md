# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoBlazeTest.spec.js >> Demo Blaze Tests
- Location: tests\DemoBlazeTest.spec.js:5:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#next2')
    - locator resolved to <button value="9" id="next2" class="page-link">Next</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    4 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 500ms

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
> 8  |         await locator.click();
     |                       ^ Error: locator.click: Target page, context or browser has been closed
  9  |     }
  10 |     async fillElement(locator, value){
  11 |         await locator.fill(value);
  12 |     }
  13 |     async getTextofElement(locator){
  14 |         return await locator.textContent();
  15 |     }
  16 |     async waitForPageLoad(){
  17 |         await this.page.waitForLoadState('domcontentloaded');
  18 |     }
  19 | }
```