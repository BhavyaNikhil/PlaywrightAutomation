import{test} from '../fixtures/baseFixture.js';
import testData from '../test-data/demoBlazeData.js';
import {getEnv} from '../config/envLoader.js';
import { logger } from '../logger/logger.js';
import { allure } from 'allure-playwright';

const env = getEnv();

test.beforeEach('Before Each Hook', async({page})=> {
    logger.info('Launching application');
    await page.goto(env.baseURL);
    page.once('dialog', async(dialog)=>{
        await dialog.accept();
    })
});

test.afterEach('After Each Hook', async({page}, testInfo) => {
    console.log(`Finished Test: ${testInfo.title}`); //testInfo provides the metadata about current test
    if (testInfo.status !== testInfo.expectedStatus) {
        const screenshot = await page.screenshot({
            fullPage: true
        });
        await allure.attachment('Failure screenshot', screenshot, 'image/png');
        logger.error(`Test Failed: ${testInfo.title}`);
    }
});