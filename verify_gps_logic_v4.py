import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        path = os.path.abspath("index.html")
        await page.goto(f"file://{path}")

        accordions = await page.query_selector_all(".accordion")

        # Expand "Glosario"
        await accordions[2].click()
        await page.wait_for_timeout(500)
        await page.evaluate("window.scrollTo(0, 2000)")
        await page.screenshot(path="verify_glosario.png")

        # Expand "Modelos"
        await accordions[3].click()
        await page.wait_for_timeout(500)
        await page.evaluate("window.scrollTo(0, 3000)")
        await page.screenshot(path="verify_modelos_text.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
