import Page from './Page'

class LoginPage extends Page {

    constructor() {

        super('login');

    };



    login(user, password) {

        browser.perfGenerateHAR()
        browser.pause(5000)
//        browser.waitForExist(this.loc.emailField, 10000)
//        browser.waitForVisible(this.loc.emailField, 5000)
//        browser.waitForEnabled(this.loc.emailField, 5000)

        // TODO: test properly
        // if (browser.isAndroid) {
        //     browser.waitForSelected(this.loc.emailField, 5000, true)
        //     browser.waitForText(this.loc.emailField, 5000)
        //     browser.waitForValue(this.loc.emailField, 5000)
        // }
        $(this.loc.passwordField).click()
        if (browser.isAndroid) {
            browser.perfPressKey("KEYBOARD_GO")
            $(this.loc.passwordField).click()
            browser.perfHideKeyboard()
        }
        $(this.loc.emailField).clearElement()
        browser.setValueImmediate(this.loc.emailField, user)
        $(this.loc.passwordField).clearElement()
        browser.setValueImmediate(this.loc.passwordField, password)
        $(this.loc.loginBtn).click()

        browser.perfStopGenerateHAR()

    }
}
module.exports= LoginPage
