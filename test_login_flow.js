const { expect } = require('chai');
const { Builder, By } = require('selenium-webdriver');
require('chromedriver');

describe('Login Flow', function () {
  this.timeout(30000);
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  it('should login successfully with valid credentials', async () => {
    await driver.get('http://example-genai-app.com/login');
    await driver.findElement(By.name('username')).sendKeys('testuser');
    await driver.findElement(By.name('password')).sendKeys('securepass');
    await driver.findElement(By.id('loginBtn')).click();
    const title = await driver.getTitle();
    expect(title).to.include('Dashboard');
  });
});
