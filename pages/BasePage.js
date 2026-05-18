export class BasePage{
    constructor(page){
        this.page = page;
    }

    //web element methods
    async clickElement(locator){
        await locator.click();
    }
    async fillElement(locator, value){
        await locator.fill(value);
    }
    async getTextofElement(locator){
        return await locator.textContent();
    }
    async waitForPageLoad(){
        await this.page.waitForLoadState('domcontentloaded');
    }
}