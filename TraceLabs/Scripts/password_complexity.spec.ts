import { test, expect } from '@playwright/test';

test('Register with password that meets complexity requirements', async ({ page }) => {
  await page.goto('https://etherscan.io/register');

  // Fill in the fields with valid data, focus on a strong password
  await page.getByLabel('Username').fill('complexPwdUser');
  await page.getByLabel('Email Address').fill('complexpwd@example.com');
  const strongPassword = 'Comp!ex123'; // min 8 karaktera, uključuje broj i simbol
  await page.getByLabel('Password').fill(strongPassword);
  await page.getByLabel('Confirm Password').fill(strongPassword);

  // Accept the terms if there is a checkbox
  const tosCheckbox = page.locator('#terms');
  if (await tosCheckbox.isVisible()) {
    await tosCheckbox.check();
  }

  // Submit form
  await page.getByRole('button', { name: /create account/i }).click();

  // Expect a redirect or verification
  await expect(page).toHaveURL(/.*verifyemail.*/);
});
