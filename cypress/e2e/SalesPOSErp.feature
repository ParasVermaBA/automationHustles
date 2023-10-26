Feature: Sales flow on POS and ERP with automation
    Scenario Outline: Verify that hub manager is able to create the sale order for the customer
        # Given Login to the POS app with <email> and <password>
        # When I create a sales order with payment method cash
        # Then the Sale Order should be created on the POS
        # When I check the transaction history
        # Then I should be able to see the last created sale order with the status as Delivery pending & payment status as Unpaid
        # When I log in to the ERPNext as an admin
        # When I click on the global search bar, search for the "Sale order list" and click on it
        # Then I should be able to see the recently created sale order on the top
        # When I click on the last created sales order
        # Then the system should open the details of the sales order
        # When I click on the connections
        # Then I should see the sales invoice automatically created
        # When  I click on the global search bar, search for the "Payment Entry" and click on it
        # Then I should be able to see three payment entries