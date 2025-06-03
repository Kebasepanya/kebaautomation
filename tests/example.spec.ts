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