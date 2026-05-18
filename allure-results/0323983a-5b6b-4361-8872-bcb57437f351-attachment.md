# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoBlazeTest.spec.js >> Demo Blaze Tests
- Location: tests\DemoBlazeTest.spec.js:5:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'baseURL')
```

# Test source

```ts
  1  | import{test} from '../fixtures/baseFixture';
  2  | import testData from '../test-data/demoBlazeData.json';
  3  | import {getEnv} from '../config/envLoader';
  4  | 
  5  | const env = getEnv();
  6  | 
  7  | test.beforeEach('Before Each Hook', async({page})=> {
> 8  |     await page.goto(env.baseURL);
     |                         ^ TypeError: Cannot read properties of undefined (reading 'baseURL')
  9  |     page.once('dialog', async(dialog)=>{
  10 |         await dialog.accept();
  11 |     })
  12 | });
```