import { test, expect } from '@playwright/test';

test('Show error or truncate when values are too long', async ({ page }) => {
  // Navigate to the registration page
  await page.goto('https://etherscan.io/register');

  // Use overly long values for username, email, and password
  const longText = 'a'.repeat(101); // 101 characters long

  await page.getByLabel('Username').fill(longText);  // Long username
  await page.getByLabel('Email Address').fill('a'.repeat(100) + '@example.com');  // Long email
  await page.getByLabel('Password').fill(longText);  // Long password
  await page.getByLabel('Confirm Password').fill(longText);  // Long confirm password

  // Check the Terms of Service checkbox if visible
  const tosCheckbox = page.locator('#terms');
  if (await tosCheckbox.isVisible()) {
    await tosCheckbox.check();
  }

  // Click the "Create Account" button
  await page.getByRole('button', { name: /create account/i }).click();

  // Expect either truncation or an error message
  const errorMessage = page.locator('.invalid-feedback, .text-danger, .error');
  await expect(errorMessage).toContainText(/value too long/i);  // Expect an error message for long values

  // Check if truncation happens in the UI
  const usernameValue = await page.getByLabel('Username').inputValue();
  await expect(usernameValue.length).toBeLessThanOrEqual(100);  // Check if the username is truncated to 100 characters
});
