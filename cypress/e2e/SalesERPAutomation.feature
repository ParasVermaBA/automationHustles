Feature: Sales flow on ERP with automation
    Scenario Outline: Creating purchase order from ERP should create sales order for hub manager automatically
        Given Login to the ERPNext with admin
        When I click on the global search bar, search for the '<Sales_Order_list>' and click on it
        When I click on the '<add_sales_order>' button
        When I enter the <customer_name>, Automation type Sales, enter intem code <item_code>, select delivery date, enter the quantity <Qty> and click on the save button
        When I click on the connections
        Then     
        Examples:
            | Sales_Order_list | Customer | Date        | customer_name | Time      | Order Type | Company   | Delivery Date | Automation |
            | Sales Order List | Supriya  | 09-10-2023  | Supriya       |  12:18:16 | Sales      | agriBORA  | 10-10-2023    | Sales      |


    # Scenario Outline: Creating sales invoice should create purchase invoice automatically
    #     Given Login to the ERPNext with admin
    #     When I click on the global search bar, search for the '<Sales_Order_list>' and click on it
    #     When I click on last created <sale order>
    #     When I click on the connections
    #     When I click on the sale invoice + icon
    #     Then I will be redirected to the sale invoice page
    #     When I checked the stock update checkbox and hit on save button
    #     Then I click on the connections and see the purchase invoice is automatically created for the hub manager should also be updated
    #     Examples:
    #         | Sales_Order_list |
    #         | Sales Order List |

    # Scenario Outline: Verify that admin will create the payment entry after the sale invoice
    #     Given Login to the ERPNext with admin
    #     When I click on the global search bar, search for the '<Sales_Order_list>' and click on it
    #     When I click on last created <sale order>
    #     When I click on the connections
    #     When I click on the payment entry + icon
    #     Then the system will redirect to payment entry page
    #     When I select the <Mode of Payment> and hit on save button
    #     Examples:
    #         | Sales_Order_list |
    #         | Sales Order List |

    # Scenario Outline: Verify that admin will create the payment entry after the purchase invoice
    #     Given Login to the ERPNext with admin
    #     When I click on the global search bar, search for the '<Purchase_Invoice_list>' and click on it
    #     When I click on last created <purchase invoice>
    #     When I click on the connections
    #     When I click on the payment entry + icon
    #     Then the system will redirect to payment entry page
    #     When I select the <Mode of Payment> and hit on save button        
    #     Examples:
    #         | Purchase_Invoice_list |
    #         | Purchase Invoice List |