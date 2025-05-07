import { test, expect } from '@playwright/test';

test('Handle leading/trailing spaces in fields', async ({ page }) => {
  // Navigate to the registration page
  await page.goto('https://etherscan.io/register');

  // Test with leading and trailing spaces in the username, email, and password fields
  await page.getByLabel('Username').fill('   userWithSpaces   ');  // Leading/trailing spaces
  await page.getByLabel('Email Address').fill('   user@example.com   ');  // Leading/trailing spaces
  await page.getByLabel('Password').fill('   ValidPass123!   ');  // Leading/trailing spaces
  await page.getByLabel('Confirm Password').fill('   ValidPass123!   ');  // Leading/trailing spaces

  // Check the Terms of Service checkbox if visible
  const tosCheckbox = page.locator('#terms');
  if (await tosCheckbox.isVisible()) {
    await tosCheckbox.check();
  }

  // Click the "Create Account" button
  await page.getByRole('button', { name: /create account/i }).click();

  // Expect no errors and ensure the spaces are trimmed or handled correctly
  const usernameValue = await page.getByLabel('Username').inputValue();
  const emailValue = await page.getByLabel('Email Address').inputValue();
  const passwordValue = await page.getByLabel('Password').inputValue();

  // Assert that the fields are trimmed of leading/trailing spaces
  await expect(usernameValue).toBe('userWithSpaces');
  await expect(emailValue).toBe('user@example.com');
  await expect(passwordValue).toBe('ValidPass123!');
});
