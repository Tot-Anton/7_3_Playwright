import { test, expect } from "@playwright/test";
import { email, password } from "../user";

test("valid test", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(email);
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill(password);
  await page.locator('[data-testid="login-submit-btn"]').click();
  await expect(page).toHaveURL("https://netology.ru/profile");
});

test("not a valid test", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill("drugoimail@mail.ru");
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill("4444");
  await page.locator('[data-testid="login-submit-btn"]').click();
  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
});