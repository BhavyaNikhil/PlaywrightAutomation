import { BasePage} from "./BasePage.js";

export class SignUpPage extends BasePage{
    constructor(page){
        super(page);
        this.signUpLink = '#signin2';
        this.username = '#sign-username';
        this.password = '#sign-password';
        this.signUpButton = "//button[normalize-space()='Sign up']";
        this.closeButton = "//div[@id='signInModal']//button[@type='button'][normalize-space()='Close']";
    }
    async clickSignUp(){
        await this.clickElement(this.page.locator(this.signUpLink));
    }
    async createUser(username,password){
        await this.fillElement(this.page.locator(this.username),username);
        await this.fillElement(this.page.locator(this.password),password);
        await this.clickElement(this.page.locator(this.signUpButton));
        //await this.clickElement(this.page.getByRole('button',{name:'Close'}).first());
        await this.clickElement(
            this.page
            .getByRole('dialog',{name:'Sign up'})
            .getByLabel('Close')
        );
    }
}