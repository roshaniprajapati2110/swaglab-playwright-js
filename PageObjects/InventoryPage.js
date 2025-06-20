export class InventoryPage{

    constructor(page){
        this.page = page;
        this.productText = page.locator('.product_label');
        this.addToCartButton = (productName) => this.page.locator(`//div[text()="${productName}"]//ancestor::div[@class="inventory_item"]//button`);
        this.cartIcon = page.locator("#shopping_cart_container");
    }

    async getProductText(){
        return await this.productText.innerText();
    }

    async clickOnAddToCartButton(productName)
    {
        await this.addToCartButton(productName).click();
    }

    async clickOnCartIcon(){
        await this.cartIcon.click();
    }

}