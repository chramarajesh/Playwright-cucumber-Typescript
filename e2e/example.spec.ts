import { test, expect } from "@playwright/test";
import {PlaywrightDevPage} from "./pageobject.model.example"

let page;

test.beforeAll(async ({ browser }) => {
  console.log("Before All called....")
  page = await browser.newPage();
});

test.afterAll(async () => {
  console.log("After All called..")
  await page.close();

});

test('should show Page Object Model article', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.pageObjectModel();
  await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});
  // test("Web Test 1 @Smoke", async ({ page }) => {
  //   await page.goto("https://playwright.dev/");
  //   const title = page.locator(".navbar__inner .navbar__title");
  //   await expect(title).toHaveText("Playwright");
  // });

//   test.describe('two tests', () => {
//   test("Web Test 2 @Smoke", async ({ page }) => {
    
//       // Go to https://www.google.com/?gws_rd=ssl
//       await page.goto('https://www.google.com/?gws_rd=ssl');
//       // Click text=No thanks
//       await page.frameLocator('iframe[role="presentation"]').locator('text=No thanks').click();
//       // Click text=Google Search >> nth=1
//       await page.locator('text=Google Search').nth(1).click();
//       // Click text=I'm Feeling Lucky >> nth=1
//       await page.locator('text=I\'m Feeling Lucky').nth(1).click();
//       await expect(page).toHaveURL('https://www.google.com/doodles');
    
//   });

//   test("Web Test 3 @Smoke", async ({ page }) => {
    
//     // Go to https://www.google.com/?gws_rd=ssl
//     await page.goto('https://www.google.com/?gws_rd=ssl');
//     // Click text=No thanks
//     await page.frameLocator('iframe[role="presentation"]').locator('text=No thanks').click();
//     // Click text=Google Search >> nth=1
//     await page.locator('text=Google Search').nth(1).click();
//     // Click text=I'm Feeling Lucky >> nth=1
//     await page.locator('text=I\'m Feeling Lucky').nth(1).click();
//     await expect(page).toHaveURL('https://www.google.com/doodles');
  
// });
// });
  
  // test("Page Screenshot", async ({ page }) => {
  //   await page.goto("http://whatsmyuseragent.org/");
  //   await page.screenshot({ path: `example.png` });
  // });

