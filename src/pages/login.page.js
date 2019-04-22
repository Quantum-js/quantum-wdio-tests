import Page from './Page'

class LoginPage extends Page {

    constructor() {

        super('loginPage');

    };



    login(user, password) {

        browser.waitForExist(this.loc.emailField,5000)

        $(this.loc.emailField).clearElement()
        browser.setValueImmediate(this.loc.emailField, user)
        $(this.loc.passwordField).clearElement()
        browser.setValueImmediate(this.loc.passwordField, password)
        $(this.loc.loginBtn).click()

    }

}
module.exports= LoginPage
