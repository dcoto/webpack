const { Chrome } = require('navalia');
const pageUrl = 'https://www.google.com/';

describe('My Page', () => {
  let chrome = {};
  
  // Setup a clean instance for each test
  beforeEach(() => {
    chrome = new Chrome();
  });
  
  // Tear down for each test
  afterEach(() => {
    return chrome.done();
  });

  it('should have a username input', () => {
    return chrome.goto(pageUrl)
      .then(() => chrome.exists('title'))
      .then((exists) => expect(exists).toEqual(true));
  });
});