import { BasePage } from "./BasePage.js";

export class HomePage extends BasePage{
    constructor(page){
        super(page);
        this.welcome = '#nameofuser';
        this.productSection = '#tbodyid';
        this.next = '#next2';
    }
    async welcomeMessage(){
        const welcomeMessage = await this.getTextofElement(this.page.locator(this.welcome));
        return welcomeMessage;
    }
    async selectProduct(productName){
        const product = await this.page.getByRole('link',{name:productName});
        
        while(true){
            if(await product.isVisible())
            {
                await product.click();
                break;
            }
            if(await this.page.locator(this.next).isVisible())
            {
                await this.clickElement(this.page.locator(this.next));
            }
        }
    }
}