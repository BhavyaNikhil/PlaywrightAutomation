# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoBlazeTest.spec.js >> Login using API-created user
- Location: tests\DemoBlazeTest.spec.js:7:1

# Error details

```
ReferenceError: logger is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - text:             
  - navigation [ref=e2]:
    - link "PRODUCT STORE" [ref=e3] [cursor=pointer]:
      - /url: index.html
      - img [ref=e4]
      - text: PRODUCT STORE
    - list [ref=e6]:
      - listitem [ref=e7]:
        - link "Home (current)" [ref=e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=e9]: (current)
      - listitem [ref=e10]:
        - link "Contact" [ref=e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e12]:
        - link "About us" [ref=e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e14]:
        - link "Cart" [ref=e15] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=e16]:
        - link "Log in" [ref=e17] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=e18]:
        - link "Sign up" [ref=e19] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e21]:
      - list [ref=e22]:
        - listitem [ref=e23] [cursor=pointer]
        - listitem [ref=e24] [cursor=pointer]
        - listitem [ref=e25] [cursor=pointer]
      - img "First slide" [ref=e28]
      - button "Previous" [ref=e29] [cursor=pointer]:
        - generic [ref=e31]: Previous
      - button "Next" [ref=e32] [cursor=pointer]:
        - generic [ref=e34]: Next
  - generic [ref=e36]:
    - generic [ref=e38]:
      - link "CATEGORIES" [ref=e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e42] [cursor=pointer]:
        - /url: "#"
    - generic [ref=e43]:
      - generic [ref=e44]:
        - generic [ref=e46]:
          - link [ref=e47] [cursor=pointer]:
            - /url: prod.html?idp_=1
          - generic [ref=e48]:
            - heading "Samsung galaxy s6" [level=4] [ref=e49]:
              - link "Samsung galaxy s6" [ref=e50] [cursor=pointer]:
                - /url: prod.html?idp_=1
            - heading "$360" [level=5] [ref=e51]
            - paragraph [ref=e52]: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
        - generic [ref=e54]:
          - link [ref=e55] [cursor=pointer]:
            - /url: prod.html?idp_=2
          - generic [ref=e56]:
            - heading "Nokia lumia 1520" [level=4] [ref=e57]:
              - link "Nokia lumia 1520" [ref=e58] [cursor=pointer]:
                - /url: prod.html?idp_=2
            - heading "$820" [level=5] [ref=e59]
            - paragraph [ref=e60]: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
        - generic [ref=e62]:
          - link [ref=e63] [cursor=pointer]:
            - /url: prod.html?idp_=3
          - generic [ref=e64]:
            - heading "Nexus 6" [level=4] [ref=e65]:
              - link "Nexus 6" [ref=e66] [cursor=pointer]:
                - /url: prod.html?idp_=3
            - heading "$650" [level=5] [ref=e67]
            - paragraph [ref=e68]: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
        - generic [ref=e70]:
          - link [ref=e71] [cursor=pointer]:
            - /url: prod.html?idp_=4
          - generic [ref=e72]:
            - heading "Samsung galaxy s7" [level=4] [ref=e73]:
              - link "Samsung galaxy s7" [ref=e74] [cursor=pointer]:
                - /url: prod.html?idp_=4
            - heading "$800" [level=5] [ref=e75]
            - paragraph [ref=e76]: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
        - generic [ref=e78]:
          - link [ref=e79] [cursor=pointer]:
            - /url: prod.html?idp_=5
          - generic [ref=e80]:
            - heading "Iphone 6 32gb" [level=4] [ref=e81]:
              - link "Iphone 6 32gb" [ref=e82] [cursor=pointer]:
                - /url: prod.html?idp_=5
            - heading "$790" [level=5] [ref=e83]
            - paragraph [ref=e84]: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
        - generic [ref=e86]:
          - link [ref=e87] [cursor=pointer]:
            - /url: prod.html?idp_=6
          - generic [ref=e88]:
            - heading "Sony xperia z5" [level=4] [ref=e89]:
              - link "Sony xperia z5" [ref=e90] [cursor=pointer]:
                - /url: prod.html?idp_=6
            - heading "$320" [level=5] [ref=e91]
            - paragraph [ref=e92]: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
        - generic [ref=e94]:
          - link [ref=e95] [cursor=pointer]:
            - /url: prod.html?idp_=7
          - generic [ref=e96]:
            - heading "HTC One M9" [level=4] [ref=e97]:
              - link "HTC One M9" [ref=e98] [cursor=pointer]:
                - /url: prod.html?idp_=7
            - heading "$700" [level=5] [ref=e99]
            - paragraph [ref=e100]: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
        - generic [ref=e102]:
          - link [ref=e103] [cursor=pointer]:
            - /url: prod.html?idp_=8
          - generic [ref=e104]:
            - heading "Sony vaio i5" [level=4] [ref=e105]:
              - link "Sony vaio i5" [ref=e106] [cursor=pointer]:
                - /url: prod.html?idp_=8
            - heading "$790" [level=5] [ref=e107]
            - paragraph [ref=e108]: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
        - generic [ref=e110]:
          - link [ref=e111] [cursor=pointer]:
            - /url: prod.html?idp_=9
          - generic [ref=e112]:
            - heading "Sony vaio i7" [level=4] [ref=e113]:
              - link "Sony vaio i7" [ref=e114] [cursor=pointer]:
                - /url: prod.html?idp_=9
            - heading "$790" [level=5] [ref=e115]
            - paragraph [ref=e116]: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
      - list [ref=e118]:
        - listitem [ref=e119]:
          - button "Previous" [ref=e120]
        - listitem [ref=e121]:
          - button "Next" [ref=e122] [cursor=pointer]
  - generic [ref=e124]:
    - generic [ref=e127]:
      - heading "About Us" [level=4] [ref=e128]
      - paragraph [ref=e129]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e132]:
      - heading "Get in Touch" [level=4] [ref=e133]
      - paragraph [ref=e134]: "Address: 2390 El Camino Real"
      - paragraph [ref=e135]: "Phone: +440 123456"
      - paragraph [ref=e136]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e140]:
      - img [ref=e141]
      - text: PRODUCT STORE
  - contentinfo [ref=e142]:
    - paragraph [ref=e143]: Copyright © Product Store
```

# Test source

```ts
  1  | import { allure } from 'allure-playwright';
  2  | import{test,expect} from '../core/customTest'; //you are using YOUR custom test and not PW test
  3  | import testData from '../test-data/demoBlazeData.js';
  4  | import { UserClient } from '../api/clients/userClient.js';
  5  | import { createUserPayload } from '../api/payloads/userPayload.js';
  6  | 
  7  | test('Login using API-created user', async ({ pages }) => {
  8  |     const userClient = new UserClient();
  9  |     const username = `user${Date.now()}`;
  10 |     const password = 'test@123';
  11 | 
> 12 |     logger.info('Creating user via API');
     |     ^ ReferenceError: logger is not defined
  13 |     const payload = createUserPayload(username, password);
  14 |     const response = await userClient.createUser(payload);
  15 |     expect(response.status()).toBe(200);
  16 |     logger.info(`API Status: ${response.status()}`);
  17 |     await pages.loginPage.loginCreatedUser(username, password);
  18 | });
  19 | 
  20 | test('Demo Blaze Tests', async({page,pages})=>{
  21 |     //params
  22 |     const username = testData.username;
  23 |     const password = testData.password;
  24 |     const productName = testData.productName; 
  25 | 
  26 |     logger.info('Creating a user via UI');
  27 |     await allure.step('Create a user with Sign Up', async() => {
  28 |         await pages.signUpPage.clickSignUp(); //Page Object Container Pattern
  29 |         await pages.signUpPage.createUser(username,password);
  30 |     })
  31 |     
  32 |     logger.info('Login with created user');
  33 |     await allure.step('Login with created user', async() => {
  34 |         await pages.loginPage.loginCreatedUser(username,password);
  35 |     })
  36 |     
  37 |     logger.info('Landing in Home Page and selecting a product');
  38 |     await allure.step('Landing in Home Page and selecting a product', async() => {
  39 |         console.log(await pages.homePage.welcomeMessage());
  40 |         await pages.homePage.selectProduct(productName);
  41 |     })
  42 |     
  43 |     logger.info('Landing in Cart Page');
  44 |     await allure.step('Landing in Cart Page', async() => {
  45 |         await pages.cartPage.addToCart();
  46 |     })
  47 | });
```