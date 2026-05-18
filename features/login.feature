Feature: Login Functionality
  Scenario: User logs into application successfully
    Given User launches demoblaze application
    When User logs in using valid credentials
    Then User should see welcome message