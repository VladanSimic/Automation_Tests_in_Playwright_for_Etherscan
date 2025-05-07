import { test, expect } from '@playwright/test';

test('Register with matching passwords in both fields', async ({ page }) => {
  await page.goto('https://etherscan.io/register');

  // Fill out the form with the same passwords
  await page.getByLabel('Username').fill('matchingPwdUser');
  await page.getByLabel('Email Address').fill('matchingpwd@example.com');
  await page.getByLabel('Password').fill('SamePassword123!');
  await page.getByLabel('Confirm Password').fill('SamePassword123!');

  // Accept the Terms if there is a checkbox
  const tosCheckbox = page.locator('#terms');
  if (await tosCheckbox.isVisible()) {
    await tosCheckbox.check();
  }

  // Click the button to create an account
  await page.getByRole('button', { name: /create account/i }).click();

  // Expect a successful redirect or confirmation (no password mismatch error)
  await expect(page).toHaveURL(/.*verifyemail.*/);
});
