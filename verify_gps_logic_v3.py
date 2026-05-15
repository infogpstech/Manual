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

        # Fundamentos is actually in the first panel, let's scroll further
        await accordions[0].click()
        await page.wait_for_timeout(500)

        # Find element containing "Posicionamiento Híbrido"
        element = await page.wait_for_selector("text=Posicionamiento Híbrido", timeout=5000)
        if element:
             await element.scroll_into_view_if_needed()
             await page.screenshot(path="verify_fundamentos_text.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
