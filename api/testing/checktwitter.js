// https://blog.usejournal.com/exploring-the-power-of-puppeteer-903a1c8c137b
// Followed tutorial to connect to page and take a screenshot

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //Trace the browser action and record it 
    await page.tracing.start({ path: 'trace.json' });
    await page.goto('http://localhost');

    //Added Test Cases to check browser functionality
    const title = await page.title();
  	await page.waitForSelector('title');
  	console.info(`The title is: ${title}`);
  	page.once('domcontentloaded', () => console.info('✅ DOM is ready'));
    page.once('load', () => console.info('✅ Page is loaded'));
    //Check if page crashes
    page.on('error', error => console.error(`❌ ${error}`));
    //Check for error on page
    page.on('pageerror', error => console.error(`❌ ${error}`));
    page.on('popup', () => console.info('👉 New page is opened'));
    //Page Requested
    page.on('request', request => console.info(`👉 Request: ${request.url()}`));

    
    console.log('Frontend server test')
    console.log('screenshot successfully saved')
    
    await page.tracing.start({ path: 'trace.json' });

    await page.screenshot({path: 'example.png'});
    await page.pdf({path: 'hn.pdf', format: 'A4'});
    
    await page.tracing.stop();
    await browser.close();
})();