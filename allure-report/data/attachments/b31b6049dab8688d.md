# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoBlazeTest.spec.js >> Demo Blaze Tests
- Location: tests\DemoBlazeTest.spec.js:18:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'MacBook air' })
    - locator resolved to <a class="hrefch" href="prod.html?idp_=11">MacBook air</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - click action done
    - waiting for scheduled navigations to finish

```

```
TimeoutError: page.screenshot: Timeout 10000ms exceeded.
Call log:
  - taking page screenshot
  - waiting for fonts to load...
  - fonts loaded

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - dialog [ref=e2]:
    - document [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - heading [level=5] [ref=e6]: New message
          - button [ref=e7]: ×
        - generic [ref=e9]:
          - generic [ref=e10]:
            - text: "Contact Email:"
            - textbox [ref=e11]
          - generic [ref=e12]:
            - text: "Contact Name:"
            - textbox [ref=e13]
          - generic [ref=e14]:
            - text: "Message:"
            - textbox [ref=e15]
        - generic [ref=e16]:
          - button [ref=e17]: Close
          - button [ref=e18]: Send message
  - dialog [ref=e19]:
    - document [ref=e20]:
      - generic [ref=e21]:
        - generic [ref=e22]:
          - heading [level=5] [ref=e23]: Sign up
          - button [ref=e24]: ×
        - generic [ref=e26]:
          - generic [ref=e27]:
            - text: "Username:"
            - textbox [ref=e28]
          - generic [ref=e29]:
            - text: "Password:"
            - textbox [ref=e30]
        - generic [ref=e31]:
          - button [ref=e32]: Close
          - button [ref=e33]: Sign up
  - dialog [ref=e34]:
    - document [ref=e35]:
      - generic [ref=e36]:
        - generic [ref=e37]:
          - heading [level=5] [ref=e38]: Log in
          - button [ref=e39]: ×
        - generic [ref=e41]:
          - generic [ref=e42]:
            - text: "Username:"
            - textbox [ref=e43]
          - generic [ref=e44]:
            - text: "Password:"
            - textbox [ref=e45]
        - generic [ref=e46]:
          - button [ref=e47]: Close
          - button [ref=e48]: Log in
  - dialog [ref=e49]:
    - document [ref=e50]:
      - generic [ref=e51]:
        - generic [ref=e52]:
          - heading [level=5] [ref=e53]: About us
          - button [ref=e54]: ×
        - button [ref=e59]: Close
  - navigation [ref=e60]:
    - button "Toggle navigation" [ref=e61]
    - generic [ref=e62]:
      - link "PRODUCT STORE" [ref=e63] [cursor=pointer]:
        - /url: index.html
        - img [ref=e64]
        - text: PRODUCT STORE
      - list [ref=e66]:
        - listitem [ref=e67]:
          - link "Home (current)" [ref=e68] [cursor=pointer]:
            - /url: index.html
        - listitem [ref=e69]:
          - link "Contact" [ref=e70] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e71]:
          - link "About us" [ref=e72] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e73]:
          - link "Cart" [ref=e74] [cursor=pointer]:
            - /url: cart.html
        - listitem [ref=e75]:
          - link "Log in" [ref=e76] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem
        - listitem [ref=e77]:
          - link "Sign up" [ref=e78] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e83]:
    - list [ref=e84]:
      - listitem [ref=e85]
      - listitem [ref=e86]
      - listitem [ref=e87]
    - link:
      - /url: "#myCarousel-2"
    - link:
      - /url: "#myCarousel-2"
```

# Test source

```ts
  1  | import{test} from '../fixtures/baseFixture.js';
  2  | import testData from '../test-data/demoBlazeData.js';
  3  | import {getEnv} from '../config/envLoader.js';
  4  | 
  5  | const env = getEnv();
  6  | 
  7  | test.beforeEach('Before Each Hook', async({page})=> {
  8  |     await page.goto(env.baseURL);
  9  |     page.once('dialog', async(dialog)=>{
  10 |         await dialog.accept();
  11 |     })
  12 | });
  13 | 
  14 | test.afterEach('After Each Hook', async({page}, testInfo) => {
  15 |     console.log(`Finished Test: ${testInfo.title}`); //testInfo provides the metadata about current test
  16 |     if (testInfo.status !== testInfo.expectedStatus) {
> 17 |         await page.screenshot({
     |                    ^ TimeoutError: page.screenshot: Timeout 10000ms exceeded.
  18 |             path: `screenshots/${testInfo.title}.png`,
  19 |             fullPage: true
  20 |         });
  21 |     }
  22 | });
```