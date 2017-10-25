const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:8080/';

describe('My Page', () => {
  let browser = {};
  
  // Setup a clean instance for each test
  beforeEach(async () => {
     browser = await puppeteer.launch();
  });
  
  // Tear down for each test
  afterEach(() => {
    return browser.close();
  });

  it('should have a valid title', async () => {
    const page = await browser.newPage();
    await page.goto(pageUrl);
    const title = await page.title();
    expect(title).toEqual('{{name}}');
  });
});