import { test, expect } from '@playwright/test';

test('Show error when username contains invalid characters', async ({ page }) => {
  // Navigate to the registration page
  await page.goto('https://etherscan.io/register');

  // Use an invalid username with special characters
  await page.getByLabel('Username').fill('<invalid!username>');
  await page.getByLabel('Email Address').fill('validemail@example.com');
  await page.getByLabel('Password').fill('ValidPass123!');
  await page.getByLabel('Confirm Password').fill('ValidPass123!');

  // Check the Terms of Service checkbox if visible
  const tosCheckbox = page.locator('#terms');
  if (await tosCheckbox.isVisible()) {
    await tosCheckbox.check();
  }

  // Click the "Create Account" button
  await page.getByRole('button', { name: /create account/i }).click();

  // Expect an error message indicating invalid username characters
  const usernameError = page.locator('.invalid-feedback, .text-danger, .error');
  await expect(usernameError).toContainText(/invalid characters in username/i);
});
