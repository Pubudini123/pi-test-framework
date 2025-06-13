// Page Object Model base structure for login page
class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  async enterUsername(username) {
    return await this.driver.findElement({ name: 'username' }).sendKeys(username);
  }

  async enterPassword(password) {
    return await this.driver.findElement({ name: 'password' }).sendKeys(password);
  }

  async clickLogin() {
    return await this.driver.findElement({ id: 'loginBtn' }).click();
  }
}

module.exports = LoginPage;
