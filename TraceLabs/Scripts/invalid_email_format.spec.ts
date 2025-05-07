import { test, expect } from '@playwright/test';

test('Show validation error for invalid email formats', async ({ page }) => {
  await page.goto('https://etherscan.io/register');

  // Enter invalid e-mail addresses in multiple attempts (you can customize)
  const invalidEmails = ['test@.com', 'test.com', 'test@com', '@example.com'];

  for (const email of invalidEmails) {
    // Clear form
    await page.reload();

    await page.getByLabel('Username').fill('invalidEmailUser');
    await page.getByLabel('Email Address').fill(email);
    await page.getByLabel('Password').fill('ValidPass123!');
    await page.getByLabel('Confirm Password').fill('ValidPass123!');

    const tosCheckbox = page.locator('#terms');
    if (await tosCheckbox.isVisible()) {
      await tosCheckbox.check();
    }

    await page.getByRole('button', { name: /create account/i }).click();

    // Expect a message about invalid email format
    const emailError = page.locator('.invalid-feedback, .text-danger, .error');
    await expect(emailError).toContainText(/valid email|invalid email/i);
  }
});
