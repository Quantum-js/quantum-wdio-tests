import Page from './Page'

class ExpensesPage extends Page {

    constructor() {

        super('expensesPage');

    };



    ss(user, password) {

        browser.waitForExist(this.loc.emailField,5000)

        $(this.loc.emailField).clearElement()
        browser.setValueImmediate(this.loc.emailField, user)
        $(this.loc.passwordField).clearElement()
        browser.setValueImmediate(this.loc.passwordField, password)
        $(this.loc.loginBtn).click()

    }

    signout () {

        $(this.lod)

    }
}
module.exports= ExpensesPage
