import { test, expect } from '@playwright/test';

test('Register with valid email format', async ({ page }) => {
  await page.goto('https://etherscan.io/register');

  // Fill registration fields
  await page.getByLabel('Username').fill('validEmailUser');
  await page.getByLabel('Email Address').fill('test@example.com');
  await page.getByLabel('Password').fill('StrongPass123!');
  await page.getByLabel('Confirm Password').fill('StrongPass123!');

  // Accept Terms if visible
  const tosCheckbox = page.locator('#terms');
  if (await tosCheckbox.isVisible()) {
    await tosCheckbox.check();
  }

  // Submit
  await page.getByRole('button', { name: /create account/i }).click();

  // Expect redirect or success message
  await expect(page).toHaveURL(/.*verifyemail.*/);
});
