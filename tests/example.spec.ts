// tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('Visit Example.com and check title', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://example.com');
  
  // Wait for the page to be ready
  await page.waitForLoadState('networkidle');
  
  // Get and verify the title
  const title = await page.title();
  console.log('Page title:', title);
  expect(title).toBe('Example Domain');
});

test('Login page title check', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  
  // Wait for the page to be ready
  await page.waitForLoadState('networkidle');
  
  // Get and verify the title
  const title = await page.title();
  console.log('Login page title:', title);
  expect(title.trim()).toContain('Test Login');
});

test('Negative username test',async({page})=>{
//Navigate to the page and test that the correct username has been used 
await page.goto('https://practicetestautomation.com/practice-test-login/');
await page.waitForLoadState('networkidle');

//Check that the correct username is used 
 const username = 'student';
  await page.fill('#username', username);

  // Verify the username was entered correctly
  const enteredUsername = await page.inputValue('#username');
  expect(enteredUsername).toBe(username);
  
  // Optional: Verify the username field is visible and enabled
  const usernameField = page.locator('#username');
  await expect(usernameField).toBeVisible();
  await expect(usernameField).toBeEnabled();
});

test('Wetu website login test', async ({ page }) => {
  // Navigate to the Wetu login page
  await page.goto('https://account.dev.wetu.com/Login');
  
  // Wait for the page to be ready
  await page.waitForLoadState('networkidle');
  
  // Enter credentials
  const username = 'wetukeba';
  const password = 'c46ed81af6eb4b22a9c0ab75562f64a1';
  
  // Fill in the login form
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  
  // Click the login button
  await page.click('button[type="submit"]');
  
  // Wait for navigation after login
  await page.waitForLoadState('networkidle');
  
  // Verify successful login by checking if we're redirected to the dashboard
  // or by checking for elements that are only present after login
  await expect(page).toHaveURL(/.*dashboard/);
  
  // Additional verification - check if user is logged in
  const userProfile = page.locator('.user-profile, .avatar, .user-menu');
  await expect(userProfile).toBeVisible();
});