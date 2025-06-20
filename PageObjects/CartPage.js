export class CartPage{
    constructor(page)
    {
        this.page = page;
        this.productNameList = page.locator('.inventory_item_name');
        this.checkOutButton = page.locator('.checkout_button');
    }

    async getProductNameList(){
       return await this.productNameList.allInnerTexts();
    }

    async clickOnCheckoutButton(){
        await this.checkOutButton.click();
    }
}