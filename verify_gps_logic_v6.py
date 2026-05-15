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

        # 1. Verify Fundamentos (Inside Accordion 0)
        await accordions[0].click()
        await page.wait_for_timeout(500)
        await page.get_by_text("Posicionamiento Híbrido").scroll_into_view_if_needed()
        await page.screenshot(path="verify_v6_fundamentos.png")

        # 2. Verify Introducción (Accordion 1)
        await accordions[1].click()
        await page.wait_for_timeout(500)
        await page.get_by_text("A diferencia de la navegación convencional").scroll_into_view_if_needed()
        await page.screenshot(path="verify_v6_introduccion.png")

        # 3. Verify Glosario (Accordion 2)
        await accordions[2].click()
        await page.wait_for_timeout(500)
        # Look for LBS in glossary
        await page.get_by_text("LBS (Location Based Services)").scroll_into_view_if_needed()
        await page.screenshot(path="verify_v6_glosario.png")

        # 4. Verify Modelos (Accordion 3)
        await accordions[3].click()
        await page.wait_for_timeout(500)
        await page.get_by_text("Modelos de Rastreo y Seguridad Vehicular").scroll_into_view_if_needed()
        await page.screenshot(path="verify_v6_modelos.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
