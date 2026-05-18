# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoBlazeTest.spec.js >> Demo Blaze Tests
- Location: tests\DemoBlazeTest.spec.js:21:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'MacBook air' })
    - locator resolved to <a class="hrefch" href="prod.html?idp_=11">MacBook air</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying
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
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "PRODUCT STORE" [ref=e4] [cursor=pointer]:
        - /url: index.html
        - img [ref=e5]
        - text: PRODUCT STORE
      - list [ref=e7]:
        - listitem [ref=e8]:
          - link "Home (current)" [ref=e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=e10]: (current)
        - listitem [ref=e11]:
          - link "Contact" [ref=e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e13]:
          - link "About us" [ref=e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e15]:
          - link "Cart" [ref=e16] [cursor=pointer]:
            - /url: cart.html
        - listitem [ref=e17]:
          - link "Log in" [ref=e18] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem
        - listitem [ref=e19]:
          - link "Sign up" [ref=e20] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e24]:
    - generic:
      - list [ref=e25]:
        - listitem [ref=e26] [cursor=pointer]
        - listitem [ref=e27] [cursor=pointer]
        - listitem [ref=e28] [cursor=pointer]
      - link:
        - /url: "#myCarousel-2"
      - link:
        - /url: "#myCarousel-2"
  - generic [ref=e31]:
    - generic [ref=e34]:
      - heading "About Us" [level=4] [ref=e35]
      - paragraph [ref=e36]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e39]:
      - heading "Get in Touch" [level=4] [ref=e40]
      - paragraph [ref=e41]: "Address: 2390 El Camino Real"
      - paragraph [ref=e42]: "Phone: +440 123456"
      - paragraph [ref=e43]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e47]:
      - img [ref=e48]
      - text: PRODUCT STORE
  - contentinfo [ref=e49]:
    - paragraph [ref=e50]: Copyright © Product Store
```

# Test source

```ts
  1  | import{test} from '../fixtures/baseFixture.js';
  2  | import testData from '../test-data/demoBlazeData.js';
  3  | import {getEnv} from '../config/envLoader.js';
  4  | import { logger } from '../logger/logger.js';
  5  | 
  6  | const env = getEnv();
  7  | 
  8  | test.beforeEach('Before Each Hook', async({page})=> {
  9  |     logger.info('Launching application');
  10 |     await page.goto(env.baseURL);
  11 |     page.once('dialog', async(dialog)=>{
  12 |         await dialog.accept();
  13 |     })
  14 | });
  15 | 
  16 | test.afterEach('After Each Hook', async({page}, testInfo) => {
  17 |     console.log(`Finished Test: ${testInfo.title}`); //testInfo provides the metadata about current test
  18 |     if (testInfo.status !== testInfo.expectedStatus) {
> 19 |         await page.screenshot({
     |                    ^ TimeoutError: page.screenshot: Timeout 10000ms exceeded.
  20 |             path: `screenshots/${testInfo.title}.png`,
  21 |             fullPage: true
  22 |         });
  23 |         logger.error(`Test Failed: ${testInfo.title}`);
  24 |     }
  25 | });
```