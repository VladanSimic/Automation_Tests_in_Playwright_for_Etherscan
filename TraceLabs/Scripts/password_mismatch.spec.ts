import { test, expect } from '@playwright/test';

test('Show error when password and confirm password do not match', async ({ page }) => {
  await page.goto('https://etherscan.io/register');

  // Enter different passwords
  await page.getByLabel('Username').fill('mismatchPwdUser');
  await page.getByLabel('Email Address').fill('mismatchpwd@example.com');
  await page.getByLabel('Password').fill('Password123!');
  await page.getByLabel('Confirm Password').fill('Password124!'); // Različita lozinka

  const tosCheckbox = page.locator('#terms');
  if (await tosCheckbox.isVisible()) {
    await tosCheckbox.check();
  }

  // Click on "Create Account"
  await page.getByRole('button', { name: /create account/i }).click();

  // Expect a password mismatch error
  const passwordError = page.locator('.invalid-feedback, .text-danger, .error');
  await expect(passwordError).toContainText(/passwords do not match/i);
});
