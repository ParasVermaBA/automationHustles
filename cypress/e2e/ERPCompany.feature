Feature: agribora company
    # Scenario Outline: Open the company list
    #     Given Login to the ERPNext with admin
    #     When I click on the global search bar, search for the '<company_list>' and click on it
    #     Then I should be landed on the '<Company_list>' page
    #     When I click on the home button, and under  "Accounting" > "Reports & Masters", I click on the company
    #     Then I should be landed on the '<Company_list>' page
    #     Examples:
    #         | company_list | Company_list                                       |
    #         | Company List | https://agriboratest-14.nestorhawk.com/app/company |


    Scenario Outline: Verify if admin is able to add and update the company
        Given Login to the ERPNext with admin
        When I click on the global search bar, search for the '<company_list>' and click on it
        When I click on the '<add_company>' button
        Then I should be landed on the '<create_new_company>' page
        # When I enter the company_name '<default_currency>' and click on the save button
        Then the system should give a pop up <message>
        When I click on <Company> from the top left corner
        # Then the system should open the company list and the newly created company should be added to the list
        # When I select the company by click on the checkbox.
        # When I click on the action button, and click on edit.
        # Then It should display a pop-up to update the fields.
        # When I select the field as company description, add the description and click on 'Update 1 record'.
        # Then It should display the pop-up 'updated successfully'.
        # When I open the updated company and check for the company description.
        # Then I should be able to see the description is updated.
        Examples:
            | company_list | create_new_company                                               | default_currency | message |
            | Company List | https://agriboratest-14.nestorhawk.com/app/company/new-company-1 | KES              | Saved   |
