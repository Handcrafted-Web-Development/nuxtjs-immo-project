import {test, webkit} from '@playwright/test'

test('form test', async () => {
    const browser = await webkit.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('http://localhost:3000/contact')
    await page.screenshot({path: `./test/screens/form.png`})
    await browser.close();
})