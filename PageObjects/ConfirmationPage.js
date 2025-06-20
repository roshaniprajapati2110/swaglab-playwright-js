export class ConfirmationPage{
    constructor(page){
        this.page = page;
        this.message = page.locator('.complete-header');
    }

    async getThankuMessage(){
        return await this.message.innerText();
    }

}