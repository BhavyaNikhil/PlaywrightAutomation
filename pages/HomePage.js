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
    async selectProduct(productName) {
        const product = this.page.getByRole('link', { name: productName });

        while (true) {
            await this.page.waitForSelector('.card-title', { state: 'visible' });

            if (await product.isVisible()) {
                await product.click();
                return;
            }

            const nextBtn = this.page.locator(this.next);
            const isNextVisible = await nextBtn.isVisible();

             if (!(await nextBtn.isVisible())) {
                throw new Error(`Product "${productName}" not found on any page.`);
            }

            // Force click bypasses intercepting elements during re-render
            await nextBtn.click({ force: true });

            // Wait for grid to clear and reload before next iteration
            //await this.page.waitForSelector('.card-title', { state: 'hidden' });
        }
    }
}