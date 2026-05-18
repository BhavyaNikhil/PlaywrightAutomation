import { BasePage } from "./BasePage.js";

export class CartPage extends BasePage{
    constructor(page){
        super(page);
        this.cartButton = "//a[normalize-space()='Add to cart']";
        this.cartLink = "//a[normalize-space()='Cart']";
    }
    async addToCart(){
        await this.clickElement(this.page.locator(this.cartButton));
        await this.clickElement(this.page.locator(this.cartLink));
    }
}