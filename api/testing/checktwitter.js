// https://blog.usejournal.com/exploring-the-power-of-puppeteer-903a1c8c137b
// Followed tutorial to connect to page and take a screenshot

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://twitter.com/JahnaviRangu');
    
    console.log('Frontend server test')
    console.log('screenshot successfully saved')
    
    await page.screenshot({path: 'example.png'});
    await page.pdf({path: 'hn.pdf', format: 'A4'});
    
    await browser.close();
})();