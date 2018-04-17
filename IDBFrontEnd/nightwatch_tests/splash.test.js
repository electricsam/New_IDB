module.exports = {
  'Splash page test' : function (browser) {
    browser
      .url('http://localhost:8181/')
      .waitForElementVisible('.HomeStyle__welcome', 1000)
      .assert.containsText('.HomeStyle__welcome', 'Welcome to the IDB')

    browser.assert.containsText(".HomeStyle__link", 'Tsunamis');

    browser.expect.element('.HomeStyle__welcome').to.have.css('display').which.equals('grid');

    browser.expect.element('.NavbarStyle__container').to.have.css('display').which.equals('grid');

    browser.expect.element('.FooterStyle__container').to.have.css('display').which.equals('grid');

    browser.assert.containsText('.FooterStyle__about', 'About Us');

    browser.assert.containsText('.FooterStyle__work', 'Our Work');

    browser.click(".HomeStyle__link", response => {
      browser.waitForElementVisible('.TableStyle__container', 4000)
      browser.expect.element('.TableStyle__container').to.be.a('div');
    })

    browser.end()
  }
};