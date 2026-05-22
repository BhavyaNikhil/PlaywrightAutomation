import { allure } from 'allure-playwright';
import{test,expect} from '../core/customTest'; //you are using YOUR custom test and not PW test
import testData from '../test-data/demoBlazeData.js';
import { UserClient } from '../api/clients/userClient.js';
import { createUserPayload } from '../api/payloads/userPayload.js';
import { logger } from '../logger/logger.js';

test('Login using API-created user', async ({ pages }) => {
    const userClient = new UserClient();
    const username = `user${Date.now()}`;
    const password = 'test@123';

    logger.info('Creating user via API');
    const payload = createUserPayload(username, password);
    const response = await userClient.createUser(payload);
    expect(response.status()).toBe(200);
    logger.info(`API Status: ${response.status()}`);
    await pages.loginPage.loginCreatedUser(username, password);
    await allure.attachment('Create User API Response', await response.text(), 'application/json');
});

test('Demo Blaze Tests', async({page,pages})=>{
    //params
    const username = testData.username;
    const password = testData.password;
    const productName = testData.productName; 

    logger.info('Creating a user via UI');
    await allure.step('Create a user with Sign Up', async() => {
        await pages.signUpPage.clickSignUp(); //Page Object Container Pattern
        await pages.signUpPage.createUser(username,password);
    })
    
    logger.info('Login with created user');
    await allure.step('Login with created user', async() => {
        await pages.loginPage.loginCreatedUser(username,password);
    })
    
    logger.info('Landing in Home Page and selecting a product');
    await allure.step('Landing in Home Page and selecting a product', async() => {
        console.log(await pages.homePage.welcomeMessage());
        //await pages.homePage.selectProduct(productName);
    })
    
    //commented these lines because of synchronization problems
    /*logger.info('Landing in Cart Page');
    await allure.step('Landing in Cart Page', async() => {
        await pages.cartPage.addToCart();
    })*/
});