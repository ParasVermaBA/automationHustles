Feature: Add Master Data
    Scenario Outline: Adding company
        Given Login to the ERPNext with admin
        When I click on the global search bar, search for the '<company_list>' and click on it
        When I click on the '<add_company>' button