// generic - done
browser.setValueImmediate(selector, value)
browser.waitForVisible(selector, ms, reverse)
browser.waitForEnabled(selector, ms, reverse)
browser.waitForSelected(selector, ms, reverse)
browser.waitForText(selector, ms, reverse)
browser.waitForValue(selector, ms, reverse)



// done
browser.perfReportVerify(assertFnc)
browser.perfReportAssert(message, status)
// under perfecto.application.steps


// app start stop info - done
browser.perfInstallApp(filePath, shouldInstrument)
browser.perfStartApp(by, app)
browser.perfCloseApp(by, app, ignoreExceptions = false)
browser.perfCleanApp(by, app)
browser.perfUninstallApp(by, app)
browser.perfUninstallAllApps() - no need to test
browser.perfGetAppInfo(property)
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


//  sensor  done
browser.perfStartImageInjection(repositoryFile,by, app)
browser.perfStopImageInjection()
browser.perfSetFingerprint(by, identifier, resultAuth, errorType)

browser.perfSetSensorAuthentication(by, identifier, resultAuth, errorType) // bot tested
browser.perfAudioInject(filePath) // not tested
browser.perfVerifyAudioReceived() // not tested


// under perfecto.device.steps
//  done
browser.perfSetLocation(by, location)
browser.perfAssertLocation(location)
browser.perfVerifyLocation(location)
browser.perfGetDeviceLocation()
browser.perfResetLocation()

// done
browser.perfGenerateHAR()
browser.perfStopGenerateHAR()


// timezone - done
browser.perfSetTimezone(timezone)
browser.perfGetTimezone()
browser.perfAssertTimezone(timezone)
browser.perfVerifyTimezone(timezone)
browser.perfResetTimezone()


// done
browser.perfGoToHomeScreen()
browser.perfSwipe(start, end)
browser.perfLockDevice(sec)
browser.perfTakeScreenshot(repositoryPath, shouldSave)
browser.perfRotateDevice(restValue, by)
browser.perfLongTouch(point, seconds = 2)
browser.perfTouch(point)
browser.perfDoubleTouch(point)
browser.perfHideKeyboard()
browser.perfPressKey(keySequence)

// done
browser.perfReportComment(comment)

// to test directly
browser.perfGetDeviceProperty(property)
browser.perfTouchObject(selector, addressBar)
browser.perfSlideObjectLeft(selector)
browser.perfSlideObject(selector, xStartMult, xEndMult, yStartMult, yEndMult = yStartMult)
browser.perfGetScale()
browser.perfGetOffset(addressBar, context = 'NATIVE_APP')



