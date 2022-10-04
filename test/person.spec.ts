import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // Go to http://localhost:8080/
  await page.goto("http://localhost:8080/");

  // Click button:has-text("Delete All Persons")
  await page.locator('button:has-text("Delete All Persons")').click();

  // Click button:has-text("Add Person")
  await page.locator('button:has-text("Add Person")').click();

  // Click button:has-text("Add Person")
  await page.locator('button:has-text("Add Person")').click();

  // Click button:has-text("Add Person")
  await page.locator('button:has-text("Add Person")').click();

  // Click text=Persons: 3
  await page.locator("text=Persons: 3").click();
});
