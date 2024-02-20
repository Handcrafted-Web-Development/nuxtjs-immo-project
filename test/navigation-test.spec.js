import {test, webkit} from '@playwright/test'

test('navigation test', async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on('response', async (response) => {
    // Vérifier si la réponse a un code d'erreur 404
    if (response.status() === 404) {
      console.log(`Erreur 404: ${response.url()}`);
      await page.goBack();
    }
  });

  await page.goto('http://localhost:3000');
  await page.locator('#mobile-menu-2').getByRole('link', {name: 'Accueil'}).click();
  await page.waitForURL('**/');
  await page.locator('#mobile-menu-2').getByRole('link', {name: 'Annonces'}).click();
  await page.waitForURL('**/annonces');
  await page.locator('#mobile-menu-2').getByRole('link', {name: 'Wishlist'}).click();
  await page.waitForURL('**/wishlist');
  await page.locator('#mobile-menu-2').getByRole('link', {name: 'Contact'}).click();
  await page.waitForURL('**/contact');
  await browser.close();
})