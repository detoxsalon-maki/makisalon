const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const iphone = {
    width: 393,
    height: 852,
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
  };

  for (const [name, path] of [['salon', '/'], ['academy', '/academy']]) {
    const page = await browser.newPage();
    await page.setViewport(iphone);
    await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1');
    await page.goto(`http://localhost:4173${path}`, { waitUntil: 'networkidle0', timeout: 30000 });
    // Wait a tick for animation
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({
      path: `screenshot-mobile-${name}.png`,
      fullPage: false,
    });
    console.log(`Saved screenshot-mobile-${name}.png`);
    await page.close();
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
