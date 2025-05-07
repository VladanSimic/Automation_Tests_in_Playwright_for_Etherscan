import { test, expect } from '@playwright/test';

test('Complete form using keyboard only (Tab navigation)', async ({ page }) => {
  // Navigate to the registration page
  await page.goto('https://etherscan.io/register');

  // Use Tab to navigate through the form and fill out the fields
  await page.locator('body').press('Tab'); // Focus on first field (Username)
  await page.locator('body').fill('KeyboardUser');
  
  await page.locator('body').press('Tab'); // Move to Email field
  await page.locator('body').fill('keyboarduser@example.com');
  
  await page.locator('body').press('Tab'); // Move to Password field
  await page.locator('body').fill('ValidPass123!');
  
  await page.locator('body').press('Tab'); // Move to Confirm Password field
  await page.locator('body').fill('ValidPass123!');
  
  const tosCheckbox = page.locator('#terms');
  if (await tosCheckbox.isVisible()) {
    await page.locator('body').press('Tab'); // Move to Terms checkbox
    await tosCheckbox.check();
  }

  await page.locator('body').press('Tab'); // Move to "Create Account" button
  await page.locator('body').press('Enter'); // Submit the form

  // Expect successful navigation or confirmation after form submission
  const successMessage = page.locator('.confirmation-message');
  await expect(successMessage).toContainText('Account created successfully');
});
