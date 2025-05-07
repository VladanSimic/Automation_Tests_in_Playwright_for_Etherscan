import { test, expect } from '@playwright/test';

test('Verify proper label and focus behavior for screen reader accessibility', async ({ page }) => {
  // Navigate to the registration page
  await page.goto('https://etherscan.io/register');

  // Verify that the "Username" field has a proper label for screen readers
  const usernameLabel = await page.locator('label[for="username"]');
  await expect(usernameLabel).toBeVisible();
  await expect(usernameLabel).toHaveText('Username');  // Ensure the label text is correct

  // Focus on the "Username" field and check if the focus behavior works properly
  const usernameField = page.getByLabel('Username');
  await usernameField.focus();
  
  // Ensure the field is focused
  const isFocused = await usernameField.evaluate(el => document.activeElement === el);
  expect(isFocused).toBeTruthy();

  // Verify if the "Password" field is properly labeled and focusable
  const passwordLabel = await page.locator('label[for="password"]');
  await expect(passwordLabel).toBeVisible();
  await expect(passwordLabel).toHaveText('Password');
  
  const passwordField = page.getByLabel('Password');
  await passwordField.focus();
  
  // Ensure the password field is focused
  const passwordIsFocused = await passwordField.evaluate(el => document.activeElement === el);
  expect(passwordIsFocused).toBeTruthy();
  
  // Verify the screen reader accessibility (using aria-labels if they exist)
  const passwordAriaLabel = await passwordField.getAttribute('aria-label');
  await expect(passwordAriaLabel).toBe('Password');
});
