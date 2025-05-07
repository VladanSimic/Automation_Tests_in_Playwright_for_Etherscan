import { test, expect } from '@playwright/test';

test('Field-specific error messages disappear once corrected', async ({ page }) => {
  // Navigate to the registration page
  await page.goto('https://etherscan.io/register');

  // Leave the email field empty and click "Create Account"
  await page.getByLabel('Email Address').fill('');
  await page.getByRole('button', { name: /create account/i }).click();

  // Expect an error message for the email field
  const emailError = page.locator('.invalid-feedback, .text-danger, .error');
  await expect(emailError).toContainText(/email is required/i);

  // Correct the email field
  await page.getByLabel('Email Address').fill('user@example.com');

  // Verify that the error message disappears after correction
  await expect(emailError).toHaveCount(0);

  // Proceed with filling in other fields and submit the form
  await page.getByLabel('Username').fill('TestUser');
  await page.getByLabel('Password').fill('ValidPass123!');
  await page.getByLabel('Confirm Password').fill('ValidPass123!');
  await page.locator('#terms').check();
  
  await page.getByRole('button', { name: /create account/i }).click();

  // Expect successful navigation or confirmation after form submission
  const successMessage = page.locator('.confirmation-message');
  await expect(successMessage).toContainText('Account created successfully');
});
