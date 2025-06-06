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
  
});
