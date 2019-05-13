@Tests
Feature: PerfectoExpense

  @serviceFuntionsTest
  Scenario: service functions
    Given I validate app functions
    And I start application by name "Perfecto Expense Tracker"
    Then I validate timezone functions
    Then I validate location functions
    Then I validate visual functions
    Then I login with user "test@perfecto.com" and password "test123"
    Then I click on home button
    And I validate user actions
    Then I logout
    Then I validate sensor functions


  @stepsTestAndroid
    Scenario: service functions
#    Given I install application "PUBLIC:TestApplication/Native/ExpenseAppVer1.0.apk"
#    And I start application by name "Perfecto Expense Tracker"
#    And I close application by name "Perfecto Expense Tracker"
#    And I start application by id "io.perfecto.expense.tracker"
#    And I close application by id "io.perfecto.expense.tracker"
#    And I clean application by id "io.perfecto.expense.tracker"
#    And I uninstall application by name "Perfecto Expense Tracker"
#    And I install instrumented application "PUBLIC:TestApplication/Native/ExpenseAppVer1.0.apk"
    And I start application by name "Perfecto Expense Tracker"
#    And Start generate Har file
#    Then I set timezone to "Asia/Jerusalem"
#    And The device timezone should be "Asia/Jerusalem"
#    And The device timezone must be "Asia/Jerusalem"
#    And I reset the device timezone
#    Then I set the device location to the coordinates "90.0,90.0"
#    And The device coordinates should be "90.0,90.0"
#    And The device coordinates must be "90.0,90.0"
#    And I reset the device location

#    When I wait for "5" seconds to see the image "PUBLIC:TestApplication/Images/logo.png" with threshold "80" and needle bound "99"
#    Then I must see image "PUBLIC:TestApplication/Images/logo.png" in "5" seconds with threshold "80" and needle bound "99"
#    And I should see image "PUBLIC:TestApplication/Images/logo.png" in "5" seconds with threshold "80" and needle bound "99"
#    And I wait for "5" seconds to see the text "Perfecto"
#    And I must see text "Perfecto"
#    And I should see text "Perfecto"
#    And I wait for "3" seconds
    And I wait for "4" seconds for "//*[@resource-id='io.perfecto.expense.tracker:id/login_email']" to appear
    And I wait for "15" seconds for "//*[@resource-id='io.perfecto.expense.tracker:id/login_emailFail']" to appear
#
#    And "//*[@resource-id='io.perfecto.expense.tracker:id/login_email']" should exist
#    And "//*[@resource-id='io.perfecto.expense.tracker:id/login_email']" must exist
    And I click on "//*[@resource-id='io.perfecto.expense.tracker:id/login_email']"
#     And I hide keyboard
#
#    And I double click on "//*[@resource-id='io.perfecto.expense.tracker:id/login_email']"
#    And I hide keyboard
#    And I tap on "//*[@resource-id='io.perfecto.expense.tracker:id/login_email']" for "3" seconds
#    And I hide keyboard
#    And I click on "//*[@resource-id='io.perfecto.expense.tracker:id/login_email']"
#    And I clear "//*[@resource-id='io.perfecto.expense.tracker:id/login_email']"
#    And I enter "test@perfecto.com" to "//*[@resource-id='io.perfecto.expense.tracker:id/login_email']"
#    And I validate "//*[@resource-id='io.perfecto.expense.tracker:id/login_email']" has the value ""
#    And I click on "//*[@resource-id='io.perfecto.expense.tracker:id/login_password']"
#     And I clear "//*[@resource-id='io.perfecto.expense.tracker:id/login_password']"
#    And I enter "test123" to "//*[@resource-id='io.perfecto.expense.tracker:id/login_password']"



#    And Add report comment "Testing Device Steps"
#
#    And I rotate the device to landscape
#    And I rotate the device to portrait
#    And I rotate the device
#    And I go to the device home screen
#    And I wait for "2" seconds
#    And I swipe left
#    And I wait for "3" seconds
#    And I swipe right
#    And I wait for "3" seconds
#    And I lock the device for "3" seconds
#    And I take a screenshot
#    And I take a screenshot and save to "PUBLIC:Kulin/QuantumJSImage.png"
#    And I press mobile "HOME" key
#    And I touch on "50%,50%" point
#    And I double click on "50%,50%" point
#    And Stop generate Har file





