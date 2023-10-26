Feature: agribora login
  Scenario Outline: Login with valid credentials
    Given I am on the login screen.
    When I enter a <username> and '<password>'
    When I click on the login button
    Then I should be landed on the '<home_screen>' page
    Examples:
      | username                   | password   | home_screen                                |
      | paras.verma@nestorbird.com | Loadtap@1 | https://agriboratest-14.nestorhawk.com/app |
      | administrator              | admin@123  | https://agriboratest-14.nestorhawk.com/app |


  Scenario Outline: Try login with invalid <username> and <password> should throw an error <message>
    Given I am on the login screen.
    When I enter a <username> and '<password>'
    When I click on the login button
    Then the system should throw a relevant error '<message>'
    Examples:
      | username      | password  | message                   |
      | administrator | admin@12  | Invalid Login. Try again. |
      | administrato  | admin@123 | Invalid Login. Try again. |

  Scenario Outline: Verify Back button on forgot password page
    Given I am on the login screen.
    When I click on the forgot password
    Then I should be landed on the '<forgot_password>' page
    When I click on the back to login button
    Then I should be landed on the '<agriBORA_home>' page
    Examples:
      | agriBORA_home                           | forgot_password                                     |
      | https://agriboratest-14.nestorhawk.com/ | https://agriboratest-14.nestorhawk.com/login#forgot |

  Scenario Outline: Enter invalid email for reset password
    Given I am on the login screen.
    When I click on the forgot password
    When I enter a <email> and click on the Reset password
    Then the system should throw a relevant error '<message>'
    Examples:
      | email         | message              |
      | test@test.com | User does not exist. |

#   Scenario Outline: Reset the password and login
#     Given I am on the login screen.
#     When I click on the forgot password
#     When I enter a <email> and click on the Reset password
#     Then the system should say '<message>'
#     When I open the registered mail account and check for the reset password link
#     Then the user should be able to see a mail with a link to reset the password.
#     When I click on the reset password link.
#     Then I should be navigated to the reset password password page screen.
#     When I enter the password, confirm the password and click on the reset password.
#     Then system should display a success message.
#     When I am on the login screen.
#     When I log in with a new password
#     Then the user should be able to change the password and login with this new password
#     Examples:
#       | email                      | message                                                  |
#       | paras.verma@nestorbird.com | Password reset instructions have been sent to your email |
