import { BasePage } from "./BasePage.js";

export class LaunchURLPage extends BasePage{
    constructor(page){
        super(page);
    }

    async launchDemoBlazeURL(url){
        await this.page.goto(url);
    }
}