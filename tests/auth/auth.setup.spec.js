import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { LaunchURLPage } from '../../pages/LaunchURLPage.js';
import testData from '../../test-data/demoBlazeData.js';
import { getEnv } from '../../config/envLoader.js';

const env = getEnv();

test('Generate Auth State', async ({ page }) => {
    const launchURLPage = new LaunchURLPage(page);
    const loginPage = new LoginPage(page);
    
    await launchURLPage.launchDemoBlazeURL(env.baseURL);
    await loginPage.loginCreatedUser(testData.username, testData.password);

    await page.context().storageState({ //saves authenticated session state to user.json
        path: 'playwright/.auth/user.json'
    });
});