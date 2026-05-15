import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Get absolute path for the file
        path = os.path.abspath("index.html")
        await page.goto(f"file://{path}")

        # Click on "Introducción" to expand it
        # Based on index.html content, it's the second accordion
        accordions = await page.query_selector_all(".accordion")

        # Expand "Fundamentos y Conocimientos Previos" (actually it's in the first part or first panel)
        # It's inside the first accordion panel "Cubierta y Generalidades"
        await accordions[0].click()
        await page.wait_for_timeout(500)
        await page.screenshot(path="verify_fundamentos.png")

        # Expand "Introducción"
        await accordions[1].click()
        await page.wait_for_timeout(500)
        await page.screenshot(path="verify_introduccion.png")

        # Expand "Modelos de GPS"
        await accordions[3].click()
        await page.wait_for_timeout(500)
        await page.screenshot(path="verify_modelos.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
