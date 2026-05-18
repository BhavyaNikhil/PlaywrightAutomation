# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoBlazeTest.spec.js >> Demo Blaze Tests
- Location: tests\DemoBlazeTest.spec.js:5:5

# Error details

```
Error: locator.isVisible: Test ended.
Call log:
    - checking visibility of locator('#next2')

```

# Test source

```ts
  1  | import { BasePage } from "./BasePage";
  2  | 
  3  | export class HomePage extends BasePage{
  4  |     constructor(page){
  5  |         super(page);
  6  |         this.welcome = '#nameofuser';
  7  |         this.productSection = '#tbodyid';
  8  |         this.next = '#next2';
  9  |     }
  10 |     async welcomeMessage(){
  11 |         const welcomeMessage = await this.getTextofElement(this.page.locator(this.welcome));
  12 |         return welcomeMessage;
  13 |     }
  14 |     async selectProduct(productName){
  15 |         const product = await this.page.getByRole('link',{name:productName});
  16 |         
  17 |         while(true){
  18 |             if(await product.isVisible())
  19 |             {
  20 |                 await product.click();
  21 |                 break;
  22 |             }
> 23 |             if(await this.page.locator(this.next).isVisible())
     |                                                   ^ Error: locator.isVisible: Test ended.
  24 |             {
  25 |                 await this.clickElement(this.page.locator(this.next));
  26 |             }
  27 |         }
  28 |     }
  29 | }
```