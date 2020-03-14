const puppeteer = require('puppeteer');
 (async () => {
    try {
    const urlanime = 'https://www.crunchyroll.com/es/videos/anime';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(urlanime, {waitUntil:'networkidle2'});
    const data = await page.evaluate(()=>{
       const title = [...document.querySelectorAll('span[itemprop="name"]')].map(v=> v.innerText);
        return title
    })
    console.log(data);
  
    
    await browser.close();
    } catch (error) {
        console.log(error);
        
    }
    
 })();