export class OverviewPage{
    constructor(page){
        this.page = page;
        this.prodcutList = page.locator('.inventory_item_name');
        this.finishButton = page.locator('.cart_button');

    }

    async getProductList(){
        return await this.prodcutList.allInnerTexts();
    }

    async clickOnFinsihButton(){
        await this.finishButton.click();
    }
}