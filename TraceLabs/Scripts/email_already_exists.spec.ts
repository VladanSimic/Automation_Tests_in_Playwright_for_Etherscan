import { test, expect } from '@playwright/test';

test('Show error when email already exists', async ({ page }) => {
  await page.goto('https://etherscan.io/register');

  // Use the email that is registered
  await page.getByLabel('Username').fill('existingEmailUser');
  await page.getByLabel('Email Address').fill('existingemail@example.com'); // Zameniti sa e-mailom koji već postoji
  await page.getByLabel('Password').fill('NewPassword123!');
  await page.getByLabel('Confirm Password').fill('NewPassword123!');

  const tosCheckbox = page.locator('#terms');
  if (await tosCheckbox.isVisible()) {
    await tosCheckbox.check();
  }

  // Click on "Create Account"
  await page.getByRole('button', { name: /create account/i }).click();

  // Expect an error message for an already registered e-mail
  const emailError = page.locator('.invalid-feedback, .text-danger, .error');
  await expect(emailError).toContainText(/email already exists/i);
});
