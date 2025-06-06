// This calls the necessary libraries that we need to use from playwright
import { test, expect } from '@playwright/test';



test('Testing Sauce Demo Login', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://www.saucedemo.com/');
   
  //Wait for the page to load fully
await page.waitForLoadState('networkidle');

const username= 'standard_user';
const password= 'secret_sauce';

//Fill in the form 
await page.fill('input[name="user-name"]', username);
await page.fill('input[name="password"]', password);

//click the button to log in 
await page.click('input[name="login-button"]');
  

//ADDING ITEMS TO THE CART
await page.goto('https://www.saucedemo.com/inventory.html');
//Wait for the page to load fully 
await page.waitForLoadState('networkidle')

//Add two items to the cart
await page.click('button[name="add-to-cart-sauce-labs-backpack"]');
await page.click('button[name="add-to-cart-sauce-labs-bike-light"]');
await page.click('button[name="add-to-cart-sauce-labs-bolt-t-shirt"]');
await page.click('button[name="add-to-cart-sauce-labs-fleece-jacket"]');

const cartBadge = page.locator('.shopping_cart_badge');
await expect(cartBadge).toBeVisible();
await expect(cartBadge).toHaveText('4');
});
