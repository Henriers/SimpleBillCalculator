import { test, expect } from '@playwright/test';

const pageUrl = 'http://localhost:5173/' //change to Local

test('should display the default currency symbol and total value', async ({ page }) => {
  await page.goto(pageUrl);
  await page.getByLabel('Currency:');
  await page.fill('#price', '100');
  await page.fill('#tip', '5');

  const totalValue = await page.textContent('h2');
  expect(totalValue).toContain('$ 105');
});

test('should display the correct currency symbol and total value', async ({ page }) => {
  await page.goto(pageUrl);
  await page.getByLabel('Currency:').selectOption('PHP');
  await page.fill('#price', '100');
  await page.fill('#tip', '10');

  const totalValue = await page.textContent('h2');
  expect(totalValue).toContain('₱ 110');
});

test('should reset price and tip when currency changes', async ({ page }) => {
  await page.goto(pageUrl);
  await page.fill('#price', '100');
  await page.fill('#tip', '10');
  await page.locator('#currency').selectOption('YEN')

  expect(await page.inputValue('#price')).toBe("0");
  expect(await page.inputValue('#tip')).toBe("0");
});

test('should update the total value when inputs change', async ({ page }) => {
  await page.goto(pageUrl);
  await page.fill('#price', '100');
  await page.fill('#tip', '10');
  await page.waitForTimeout(500);

  const totalValue = await page.textContent('h2');
  expect(totalValue).toContain('110');

  await page.fill('#price', '200');
  await page.waitForTimeout(500);
  const updatedTotalValue = await page.textContent('h2');
  expect(updatedTotalValue).toContain('210');
});

test('should display the correct color based on total value', async ({ page }) => {
  await page.goto(pageUrl);
  await page.fill('#price', '50');
  await page.waitForTimeout(500);

  const totalElement = await page.$('h2');
  expect(await totalElement!.getAttribute('style')).toContain('color: red');

  await page.fill('#price', '500');
  await page.waitForTimeout(500);
  expect(await totalElement!.getAttribute('style')).toContain('color: black');

  await page.fill('#price', '1500');
  await page.waitForTimeout(500);
  expect(await totalElement!.getAttribute('style')).toContain('color: green');
});