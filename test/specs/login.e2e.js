const LoginPage = require('../pageobjects/login.page')

describe('login page', () => {
    it('should get title', async() => {
       await browser.url("http://localhost:3000");
       await browser.saveScreen('loginPage', { /* some options */ });

       expect(await browser.checkScreen('loginPage', { /* some options */ })).toEqual(0);

    });
});

