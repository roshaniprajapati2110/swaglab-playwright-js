export class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.inventoryList = page.locator('.inventory_list');
    this.errorMessage = page.locator('[data-test="error"]')

    /**
    1.id = #
      this.usernameText = page.loctore('#user-name');

    2.xpath 
      this.xpath = page.loctore('//input[@id="user-name"]');

    3.Using Class Name (via CSS selector)
      this.xpath = page.loctore('.input_error');

    4. Using Any Attribute (via CSS)
      this.usernameInput = page.locator('input[placeholder="Username"]'); -- input[data-test="username"]*/
  }

  async goto() {
    await this.page.goto(''); // Use the actual URL
  }

  async isInventoryPageDisplayed(){
    return await this.inventoryList.isVisible();
  }
  
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage(){
    return await this.errorMessage.innerText();
  }
}
