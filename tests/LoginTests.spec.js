import {test, expect} from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage';
import { LoginFectory } from '../DataObject_Factory/loginFactory';
import { Log} from '../Utilities/logger';

test('Login Test with Valid Users', async({page})=>{
    const loginPage = new LoginPage(page);
    const ValidUser = LoginFectory.ValidUser();

    Log.info('Navigate to the Url and take login with valid user');
    await loginPage.goto();
    await loginPage.login(ValidUser.email, ValidUser.password);

    Log.info('Verify that after login user is navigated inventory page')
    await expect(page).toHaveURL(/.*inventory.html/);
     expect(await loginPage.isInventoryPageDisplayed()).toBeTruthy();
     expect(await loginPage.isInventoryPageDisplayed()).toBe(true);

    /* -- test.step - playwrite tool that provide the line by line step  
        await test.step('Navigate to the Url and take login', async()=>{
        await loginPage.goto();
        await loginPage.login(ValidUser.email, ValidUser.password);
    }) */
})


test('Login Test with Invalid User', async({page})=>{
    const loginPage = new LoginPage(page);
    const invalidUserInfo = LoginFectory.InvalidUser();

    await loginPage.goto();
    await loginPage.login(invalidUserInfo.email, invalidUserInfo.password);

    expect(await loginPage.getErrorMessage()).toContain('Epic sadface:');
    expect(await loginPage.getErrorMessage()).toContain('Username and password do not match any user in this service');

})
