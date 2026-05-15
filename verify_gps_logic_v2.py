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

        # Expand first panel
        await accordions[0].click()
        await page.wait_for_timeout(500)
        # Scroll down to see Fundamentos
        await page.evaluate("window.scrollTo(0, 800)")
        await page.screenshot(path="verify_fundamentos_scrolled.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
