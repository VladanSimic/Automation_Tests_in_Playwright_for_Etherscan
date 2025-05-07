import { test, expect } from '@playwright/test';

test('Show validation errors when all fields are empty', async ({ page }) => {
  await page.goto('https://etherscan.io/register');

  // Directly click on "Create Account" without filling in anything
  await page.getByRole('button', { name: /create account/i }).click();

  // Check that error messages are displayed next to all required fields
  await expect(page.getByLabel('Username')).toHaveAttribute('aria-invalid', 'true');
  await expect(page.getByLabel('Email Address')).toHaveAttribute('aria-invalid', 'true');
  await expect(page.getByLabel('Password')).toHaveAttribute('aria-invalid', 'true');
  await expect(page.getByLabel('Confirm Password')).toHaveAttribute('aria-invalid', 'true');

  // check if specific text messages are also displayed
  const errorMessages = page.locator('.invalid-feedback, .text-danger, .error');
  await expect(errorMessages).toHaveCountGreaterThan(0);
});
