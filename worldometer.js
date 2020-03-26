const puppeteer = require('puppeteer-extra')

puppeteer.launch({
    headless: true
}).then(async browser => {
    const page = await browser.newPage();

    await page.goto('https://www.worldometers.info/coronavirus');

    page.waitForSelector('.maincounter-number')
    .then(async function() {
        const totalCases = await page.$eval('.maincounter-number span', element => element.innerHTML);
        console.log('Total Cases::', totalCases); 
    })

})