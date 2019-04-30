import Page from './Page'

class ExpensesPage extends Page {

    constructor() {

        super('expenses');

    };


    logout() {

        $(this.loc.menuBtn).click()
        browser.waitForVisible(this.loc.logoutBtn, 5000)
        $(this.loc.logoutBtn).click()
        if (browser.isAndroid) {
            browser.waitForVisible(this.loc.logoutPopupTitle, 5000)
            $(this.loc.popupOkBtn).click()
        }
    }

    checkImaneInjection() {

        let logo = 'PUBLIC:TestApplication/Images/logo.png'
        let app = 'Perfecto Expense Tracker'

        $(this.loc.addBtn).click()
        $(this.loc.attachBtn).click()
        browser.perfStartImageInjection(logo, app, 'name')

        $(this.loc.cameraBtn).click()

        browser.waitForVisible(this.loc.popupOkBtn)
        $(this.loc.popupOkBtn).click()

        $(this.loc.takePic).click()
        browser.waitForVisible(this.loc.usePhoto)
        $(this.loc.usePhoto).click()
        browser.perfStopImageInjection()
        browser.waitForVisible(this.loc.browser.removeAttach)


    }
}
module.exports= ExpensesPage
