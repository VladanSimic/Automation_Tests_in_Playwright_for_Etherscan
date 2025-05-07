import { test, expect } from '@playwright/test';

test('Paste password into confirm password field', async ({ page }) => {
  // Navigate to the registration page
  await page.goto('https://etherscan.io/register');

  // Fill in the password field
  await page.getByLabel('Password').fill('ValidPass123!');

  // Paste the same password into the confirm password field
  const confirmPasswordField = page.getByLabel('Confirm Password');
  await confirmPasswordField.fill(''); // Clear confirm password field before pasting
  await confirmPasswordField.type('ValidPass123!'); // Paste password into confirm field

  // Check if password and confirm password fields match
  const passwordValue = await page.getByLabel('Password').inputValue();
  const confirmPasswordValue = await confirmPasswordField.inputValue();

  // Assert that both fields have the same value
  await expect(passwordValue).toBe(confirmPasswordValue);

  // Submit the form if the passwords match
  await page.getByRole('button', { name: /create account/i }).click();

  // Expect successful navigation or confirmation after form submission
  const successMessage = page.locator('.confirmation-message');
  await expect(successMessage).toContainText('Account created successfully');
});
