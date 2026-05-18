import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import testData from '../test-data/demoBlazeData.js';
import { getEnv } from '../config/envLoader.js';

import { LoginPage } from '../pages/LoginPage.js';
import { LaunchURLPage } from '../pages/LaunchURLPage.js';
import { HomePage } from '../pages/HomePage.js';

let browser;
let page;

const env = getEnv();

let loginPage;
let launchURLPage;
let homePage;

Given('User launches demoblaze application', async function() {
    browser = await chromium.launch();
    page = await browser.newPage();
    launchURLPage = new LaunchURLPage(page);
    await launchURLPage.launchDemoBlazeURL(env.baseURL);
});

When('User logs in using valid credentials', async function() {
    loginPage = new LoginPage(page);
    await loginPage.loginCreatedUser(testData.username,testData.password);
});

Then('User should see welcome message', async function() {
    homePage = new HomePage(page);
    const message = await homePage.welcomeMessage();
    if(message.includes(null)) {
        throw new Error('Welcome message not displayed');
    }
    await browser.close();
})