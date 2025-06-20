export class CheckoutPage{
    constructor(page)
    {
        this.page = page;
        this.checkoutHeaderText = page.locator('.subheader');
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.zipCode = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('.btn_primary');
    }

    async getCheckoutPageHeaderText(){
        return await this.checkoutHeaderText.innerText();
    }

    async fillDetails(firstName, lastName, zipCode){
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.zipCode.fill(zipCode);
    }

    async clickOnContinueButton(){
        await this.continueButton.click();
    }
}