import { BasePage } from "./BasePage.js";
import { logger } from '../logger/logger.js';

export class LoginPage extends BasePage{
    constructor(page){
        super(page);
        this.loginLink = '#login2';
        this.username = '#loginusername';
        this.password = '#loginpassword';
        this.loginButton = "//button[normalize-space()='Log in']";
    }
    async loginCreatedUser(username,password){
        logger.info(`Logging in user: ${username}`);
        await this.clickElement(this.page.locator(this.loginLink));
        await this.fillElement(this.page.locator(this.username),username);
        await this.fillElement(this.page.locator(this.password),password);
        await this.clickElement(this.page.locator(this.loginButton));
    }
}