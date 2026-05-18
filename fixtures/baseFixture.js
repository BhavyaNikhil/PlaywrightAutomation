import { test as base, expect } from '@playwright/test';

import { LaunchURLPage } from '../pages/LaunchURLPage.js';
import { SignUpPage } from '../pages/SignUpPage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { HomePage } from '../pages/HomePage.js';
import { CartPage } from '../pages/CartPage.js';

const test = base.extend({
    pages: async ({ page }, use) => {
        const pages = { //fixture aggregation pattern - created one fixture called pages which calls all page objects
            launchURLPage: new LaunchURLPage(page),
            signUpPage: new SignUpPage(page),
            loginPage: new LoginPage(page),
            homePage: new HomePage(page),
            cartPage: new CartPage(page)
        };
        await use(pages);
    }
});

export { test, expect };