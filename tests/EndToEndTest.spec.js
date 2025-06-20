import { test, expect } from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage';
import { LoginFectory } from '../Data_Factory/loginFactory';
import { InventoryPage } from '../PageObjects/InventoryPage';
import { Log } from '../Utilities/logger';
import { CartPage } from '../PageObjects/CartPage';
import { CheckoutPage } from '../PageObjects/CheckoutPage';
import { CheckoutFactory } from '../Data_Factory/CheckoutFactory';
import { OverviewPage } from '../PageObjects/OverviewPage';
import { ConfirmationPage } from '../PageObjects/ConfirmationPage';

test('Complete Purchase Flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const overViewPage = new OverviewPage(page);
    const confirmationPage = new ConfirmationPage(page);

    const validUser = LoginFectory.ValidUser();
    const UserDetails = CheckoutFactory.AddUserDetails();

    Log.info("Step 1: Navigating to the application and logging in with valid credentials.");
    await loginPage.goto();
    await loginPage.login(validUser.email, validUser.password);

    Log.info("Step 2: Verifying that the product listing page is displayed.");
    expect(await inventoryPage.getProductText()).toContain('Products');

    const expectedProducts= ['Sauce Labs Backpack','Sauce Labs Bike Light']
    Log.info(`Step 3: Adding products to the cart: ${expectedProducts.join(', ')}`);
    for (const product of expectedProducts) {
         await inventoryPage.clickOnAddToCartButton(product);   
    }
   
    Log.info("Step 4: Navigating to the cart.");
    await inventoryPage.clickOnCartIcon();

    Log.info("Step 5: Retrieving the list of products from the cart.");
    const actualProducts = await cartPage.getProductNameList();
    console.log("Products in cart:", actualProducts);

    Log.info("Step 6: Verifying that the selected products match the products in the cart.");
    expect(actualProducts).toEqual(expectedProducts);

    Log.info('Step 7: Click on the Checkout button');
    await cartPage.clickOnCheckoutButton();

    Log.info('Step 8: Verifying the text of Checkout page');
    expect(await checkoutPage.getCheckoutPageHeaderText()).toContain('Checkout: Your Information');
    
    Log.info('Step 9: Fill the user details');
    await checkoutPage.fillDetails(UserDetails.FirstName, UserDetails.LastName, UserDetails.ZipCode);

    Log.info('Step 10: Click on the Continue Button');
    await checkoutPage.clickOnContinueButton();

    Log.info('Step 11: Get the product list from overview page and compare with the expected List');
    expect(await overViewPage.getProductList()).toEqual(expectedProducts);

    Log.info('Step 12: Click on the Finish button');
    await overViewPage.clickOnFinsihButton();

    Log.info('Step 13: Get the "Thank you" message');
    expect(await confirmationPage.getThankuMessage()).toContain('THANK YOU FOR YOUR ORDER');

    Log.info("Purchase flow up to cart verification completed successfully.");
})