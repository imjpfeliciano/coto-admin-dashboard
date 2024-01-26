import { test, expect } from '@playwright/test'

test('Should navigate to the users page', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Listado')

  await expect(page).toHaveURL('/users')
  await expect(page.locator('h3')).toHaveText('Users management')
})

// TODO: Fix this test visiting a user page from users list
// test("Should navigate to the users edit page", async ({ page }) => {
//   await page.goto("/users");
//   await page.click("text=User 1");

//   await expect(page.locator("h2")).toHaveText("Edit User");
// });
