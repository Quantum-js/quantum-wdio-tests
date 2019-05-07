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
    Given I install application "PUBLIC:TestApplication/Native/ExpenseAppVer1.0.apk"
    And I start application by name "Perfecto Expense Tracker"
    And I close application by name "Perfecto Expense Tracker"
    And I start application by id "io.perfecto.expense.tracker"
    And I close application by id "io.perfecto.expense.tracker"
    And I clean application by id "io.perfecto.expense.tracker"
    And I uninstall application by name "Perfecto Expense Tracker"
    And I install instrumented application "PUBLIC:TestApplication/Native/ExpenseAppVer1.0.apk"
    And I start application by name "Perfecto Expense Tracker"
    Then I set timezone to "Asia/Jerusalem"
    And The device timezone should be "Asia/Jerusalem"
    And The device timezone must be "Asia/Jerusalem"
    And I reset the device timezone
    Then I set the device location to the coordinates "90.0,90.0"
    And The device coordinates should be "90.0,90.0"
    And The device coordinates must be "90.0,90.0"
    And I reset the device location




