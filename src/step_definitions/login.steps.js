import pageObjectMap from '../support/pageObjectMap.js'
import chai from "chai";
const assert = chai.assert

module.exports = function() {
    'use strict'

    let currentPage = new pageObjectMap['LoginPage'];

    this.Then(/^I login with user "([^"]*)" and password "([^"]*)"$/, function (user, password) {
        return currentPage.login(user, password);
    })

    this.Then(/^I logout$/, function () {
        let currentPage = new pageObjectMap['ExpensesPage'];
        return currentPage.logout();
    })


    this.Then(/^I validate app functions$/, function () {
        console.log("PLATFORM:" + browser.isAndroid)
        let filePath = browser.isAndroid? 'PUBLIC:TestApplication/Native/ExpenseAppVer1.0.apk' : 'PUBLIC:TestApplication/Native/InvoiceApp1.0.ipa'
        let app = 'Perfecto Expense Tracker'

        // browser.perfInstallApp(filePath, true)
        // browser.perfStartApp('name', app)
        // browser.perfCloseApp('name', app)
        // browser.perfCleanApp('name', app)
        // browser.perfUninstallApp('name', app)
        browser.perfInstallApp(filePath, true, true)

    })

    this.Then(/^I validate timezone functions$/, function () {

        if (browser.isAndroid) {
            let deviceTimezone = browser.perfGetTimezone()
            let timezone = "Asia/Jerusalem"
            browser.perfSetTimezone(timezone)
            // let assertMethod = () => assert.equal(deviceTimezone, timezone, `Device Location ${deviceTimezone} should be equal to ${timezone}`)
            // return browser.perfReportVerify(assertMethod)
            browser.perfVerifyTimezone(timezone)
            browser.perfResetTimezone()
            browser.perfAssertTimezone(deviceTimezone)
        } else {

            browser.perfReportComment('Not supported for this platform')
        }
    })

    this.Then(/^I validate location functions$/, function () {

        if (browser.isAndroid) {
            let deviceLocation = browser.perfGetDeviceLocation()
            let coordinates = "90.0,90.0"
            browser.perfSetLocation('coordinates', coordinates)
            browser.perfAssertLocation(coordinates)
            browser.perfResetLocation()
            // browser.pause()
            // browser.perfVerifyLocation(deviceLocation)


        } else {

            browser.perfReportComment('Not supported for this platform')
        }
    })

    this.Then(/^I validate visual functions$/, function () {


        let title = 'Perfecto'
        let logo = 'PUBLIC:TestApplication/Images/logo.png'

        browser.perfWaitForPresentImageVisual(logo, 5, 80, 99 )
        browser.perfFindImage(logo, 5, 80, 99 )
        browser.perfAssertVisualImage(logo, 5, 80, 99 )
        browser.perfVerifyVisualImage(logo, 5, 80, 99 )
        browser.perfWaitForPresentTextVisual(title, 5)
        browser.perfFindText(title, 5)
        browser.perfAssertVisualText(title)
        browser.perfVerifyVisualText(title)

    });

    this.Then(/^I validate sensor functions$/, function () {
        if (browser.isIOS) {
            // image injection test

            let imageInjectionApp = 'RealTimeFilter'
            let filePath = 'PUBLIC:ImageInjection/RealTimeFilter.ipa'
            let image = 'PUBLIC:ImageInjection/CreditCard.jpg'
            let okBtn = '//*[@label="OK"]'
            let imageValidation = 'PUBLIC:ImageInjection/CreditCardValidation.png'

            browser.perfInstallApp(filePath, true, true)
            browser.perfStartApp('name', imageInjectionApp)
            try {
                browser.waitForVisible(okBtn)
                $(okBtn).click()
            } catch {}

            browser.perfStartImageInjection(image, 'name', imageInjectionApp)
            browser.perfAssertVisualImage(imageValidation, 60, 80, 80)
            browser.perfStopImageInjection()

            // Fingerprint test
            let authBtn = '//*[@label="AUTH"]'
            let app = 'FingerprintTest'
            browser.perfStartApp('name', app)
            $(authBtn).click()
            browser.perfSetFingerprint('name', app, 'fail', 'authFailed')
            browser.perfAssertVisualText('failure')

            // browser.perfSetSensorAuthentication(by, identifier, resultAuth, errorType)
            //
            // browser.perfAudioInject(filePath)
            // browser.perfVerifyAudioReceived() // not tested
        }
        else {

            browser.perfReportComment('Not tested for this platform')
        }
    })

    this.Then(/^I click on home button$/, function () {

        browser.perfGoToHomeScreen()
        browser.pause(1000)

    })

    this.Then(/^I validate user actions$/, function () {

        //   browser.perfSwipe("60%,50%", "10%,50%")
        // browser.perfLockDevice(3)
        //browser.perfTakeScreenshot("PUBLIC:Genesis/temp.png", true)
        browser.perfRotateDevice("landscape", "state")
        browser.perfLongTouch("60%,50%", 4)
        browser.perfTouch("60%,50%")
        browser.perfDoubleTouch("60%,50%")
//
//

    })
}
