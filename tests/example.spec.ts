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