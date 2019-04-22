// generic
browser.setValueImmediate(selector, value)
browser.waitForVisible(selector, ms, reverse)
browser.waitForEnabled(selector, ms, reverse)
browser.waitForSelected(selector, ms, reverse)
browser.waitForText(selector, ms, reverse)
browser.waitForValue(selector, ms, reverse

browser.perfPressKey(keySequence)

// done
browser.perfReportVerify(assertFnc)
browser.perfReportAssert(message, status)
// under perfecto.application.steps


// app start stop info
browser.perfInstallApp(filePath, shouldInstrument)
browser.perfStartApp(app, by)
browser.perfCloseApp(app, by, ignoreExceptions = false)
browser.perfCleanApp(app, by)
browser.perfUninstallApp(app, by)

browser.perfUninstallAllApps()
browser.perfGetApplicationInfo(property)
browser.perfVerifyAppInfo(propertyName, propertyValue)
browser.perfAssertAppInfo(propertyName, propertyValue)

//  visual - done
browser.perfWaitForPresentTextVisual(text, seconds)
browser.perfWaitForPresentImageVisual(img, seconds)
browser.perfFindImage(img, timeout)
browser.perfAssertVisualImage(img, seconds = 180)
browser.perfVerifyVisualImage(img)
browser.perfFindText(text, timeout)
browser.perfAssertVisualText(text)
browser.perfVerifyVisualText(text)


//  sensor
browser.perfStartImageInjection(repositoryFile, app, by)
browser.perfStopImageInjection()
browser.perfSetFingerprint(by, identifier, resultAuth, errorType)
browser.perfSetSensorAuthentication(by, identifier, resultAuth, errorType)
browser.perfAudioInject(filePath)
browser.perfVerifyAudioReceived()


// under perfecto.device.steps
//  done
browser.perfSetLocation(location, by)
browser.perfAssertLocation(location)
browser.perfVerifyLocation(location)
browser.perfGetDeviceLocation()
browser.perfResetLocation()

//
browser.perfGenerateHAR()
browser.perfStopGenerateHAR()


// timezone - done
browser.perfSetTimezone(timezone)
browser.perfGetTimezone()
browser.perfAssertTimezone(timezone)
browser.perfVerifyTimezone(timezone)
browser.perfResetTimezone()



browser.perfGoToHomeScreen()
browser.perfSwipe(start, end)
browser.perfLockDevice(sec)
browser.perfTakeScreenshot(repositoryPath, shouldSave)
browser.perfRotateDevice(restValue, by)
browser.perfLongTouch(point, seconds = 2)
browser.perfTouch(point)
browser.perfDoubleTouch(point)
browser.perfHideKeyboard()

// done
browser.perfReportComment(comment)

// to test directly
browser.perfGetDeviceProperty(property)
browser.perfTouchObject(selector, addressBar)
browser.perfSlideObjectLeft(selector)
browser.perfSlideObject(selector, xStartMult, xEndMult, yStartMult, yEndMult = yStartMult)
browser.perfGetScale()
browser.perfGetOffset(addressBar, context = 'NATIVE_APP')

