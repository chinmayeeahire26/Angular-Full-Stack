const { Builder, By, until } = require('selenium-webdriver');

async function loginToFlipkart() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.flipkart.com');
    await driver.wait(until.elementLocated(By.css('input[type="text"]')), 10000);
    await driver.findElement(By.css('input[type="text"]')).sendKeys('your-username');
    await driver.findElement(By.css('input[type="password"]')).sendKeys('your-password');
    await driver.findElement(By.css('button[type="submit"]')).click();
    await driver.wait(until.titleIs('Flipkart'), 10000);
  } finally {
    await driver.quit();
  }
}

loginToFlipkart();