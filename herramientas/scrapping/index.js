const puppeteer = require('puppeteer');

(async () => {
    //Nuestro codigo dentro de una función autoejecutable
    console.log("Lanzamos navegador");
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox'], headless: false});
    // const browser = await puppeteer.launch({headless: false})



    console.log("Cerramos navegador");
    browser.close();
    console.log("Navegador cerrado");
 
})();