// tests/example.spec.ts
import { test, expect } from '@playwright/test';



test('Wetu website login test', async ({ page }) => {
  // Navigate to the Wetu login page
  await page.goto('https://account.dev.wetu.com/Login');
  
  // Wait for the page to be ready
  await page.waitForLoadState('networkidle');
  
  // Enter credentials
  const username = 'wetukeba';
  const password = 'c46ed81af6eb4b22a9c0ab75562f64a1';
  
  // Fill in the login form
  await page.fill('input[name="email"]', username);
  await page.fill('input[name="password"]', password);
  
  // Click the login button
  await page.click('button[type="Login"]');
  
  // Wait for navigation after login
  await page.waitForLoadState('networkidle');
  
  // Verify successful login by checking if we're redirected to the dashboard
  // or by checking for elements that are only present after login
  await expect(page).toHaveURL(/.*dashboard/);
  
  // Additional verification - check if user is logged in
  const userProfile = page.locator('.user-profile, .avatar, .user-menu');
  await expect(userProfile).toBeVisible();
});
//Keba is testing now 