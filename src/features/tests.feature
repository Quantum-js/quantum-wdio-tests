@PerfectoExpense
Feature: PerfectoExpense

  Scenario: service functions
    Given I start application by name "Perfecto Expense Tracker"
#    Then I validate app functions
    Then I validate timezone functions
    Then I validate location functions
    Then I validate visual functions
    Then I login with user "test@perfecto.com" and password "test123"




