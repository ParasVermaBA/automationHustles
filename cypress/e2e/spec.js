/// <reference types="cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import cypress from "cypress";

Given("I am on the login screen.", () => {
  cy.visit("https://agriboratest-automation.nestorhawk.com/login#login");
  cy.wait(1000);
});

When("I enter a {word} and {string}", (username, password) => {
  cy.get('input[id="login_email"]').type(username);
  cy.get('input[id="login_password"]').type(password);
});

When("I click on the login button", () => {
  cy.get('button[type="submit"]').eq(0).click();
  cy.wait(2000);
});

Then("I should be landed on the {string} page", (page) => {
  cy.url().should("include", page);
});

Then("the system should throw a relevant error {string}", (message) => {
  cy.contains(message).should("exist");
});

When("I click on the forgot password", () => {
  cy.get('a[href="#forgot"]').click();
});

Then("the system should open a new page to reset password", () => {
  cy.contains("Forgot Password").should("exist");
});

When("I click on the back to login button", () => {
  cy.contains("Back to Login").click();
});

When("I enter a {word} and click on the Reset password", (email) => {
  cy.get('input[id="forgot_email"]').type(email);
  cy.contains("Reset Password").click();
});

Then("the system should say {string}", (message) => {
  cy.contains(message).should("exist");
});

When(
  "I open the registered mail account and check for the reset password link",
  () => {
    cy.visit(
      "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F1%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F1%2F&ifkv=AYZoVhcXjY-hK0FcsFlbw5EGBGYkOziAhzdiuyv3kApkYNUXJeQXEdZgRu1i-x_wAilDLHch1_6vXA&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S570598494%3A1696319197298742&theme=glif#inbox"
    );
    cy.get('input[type="email"]').type("paras.verma@nestorbird.com");
    cy.contains("Next").click();
    cy.wait(2000);
    cy.get('input[type="password"]').type("Loadtap@1");
    cy.contains("Next").click();
    cy.wait(10000);
  }
);

Given("Login to the ERPNext with admin", () => {
  cy.ERPlogin();
});

When(
  "I click on the global search bar, search for the {string} and click on it",
  (value) => {
    cy.wait(1000);
    cy.get('input[id="navbar-search"]').then((dropDown) => {
      cy.wrap(dropDown).click().type(value);
      cy.wait(1000);
      cy.get('ul[role="listbox"] li').each((listItem) => {
        if (listItem.text().trim() === value) {
          cy.wrap(listItem).click();
          cy.wait(1000);
        }
      });
    });
  }
);

When(
  'I click on the home button, and under  "Accounting" > "Reports & Masters", I click on the company',
  () => {
    cy.get('a[class="navbar-brand navbar-home"]').click();
    cy.get('a[title="Accounting"]').click();
    cy.get('a[title="Company"]').click();
  }
);

When("I click on the {string} button", () => {
  cy.get('button[class="btn btn-primary btn-sm primary-action"]').click();
});

When(
  "I enter the company_name {string} and click on the save button",
  (default_currency) => {
    const uniqueName = cypress.env("uniqueName");
    cy.wait(1000);
    cy.get('input[data-fieldname="company"]').click().type(uniqueName);
    cy.get('input[data-fieldname="default_currency"]')
      .click()
      .type(default_currency);
    cy.get('input[data-fieldname="company"]').click();
    cy.get('button[data-label="Save"]').click();
    cy.wait(80000);
  }
);
Then("the system should give a pop up {word}", () => {
  cy.on("window:alert", (str) => {
    expect(str).to.include("Saved");
  });
});

When("I click on <Company> from the top left corner", () => {
  cy.get('a[href="/app/company/view/List"]').click();
});

When(
  "the system should open the company list and the newly created company should be added to the list",
  () => {
    cy.get('h3[title="Company"]').should("exist");
    const uniqueName = cypress.env("uniqueName");
    cy.get('a[class="ellipsis"]').eql(0).should.contains(uniqueName);
  }
);

When(
  "I enter the {word}, Automation type Sales, enter intem code {word}, select delivery date, enter the quantity <Qty> and click on the save button",
  (customer_name) => {
    cy.wait(2000);
    cy.get('input[data-fieldname="customer"]').eq(1).type("Supriya");
    cy.wait(2000);
    cy.get('input[data-fieldname="po_no"]').click();
    cy.get('select[data-fieldname="sales_type"]').select("Sales");
    cy.wait(2000);
    cy.get(".rows > .grid-row > .data-row > .col-xs-3").type("Suger01");
    cy.wait(3000);
    cy.get(
      ".col-xs-2.error > .field-area > .form-group > .input-with-feedback"
    ).type("qwert");
    cy.get('input[placeholder="Quantity"]').clear().type(2);
    cy.get('button[class="btn btn-primary btn-sm primary-action"]')
      .eq(1)
      .click();
    cy.wait(2000);
    cy.get('button[class="btn btn-primary btn-sm primary-action"]')
      .eq(1)
      .click();
    cy.wait(2000);
    cy.get('button[class="btn btn-primary btn-sm btn-modal-primary"]').click();
  }
);

When("I click on the connections", () => {
  cy.get('a[aria-controls="Connections"]').click();
});

Then("I should be able see the created sales order", () => {
  cy.get('use[href="#icon-filter-x"]').click();
});

Then(
  "I should see the purchase order is automatically created for the hub manager",
  () => {
    cy.get("span.count").should("have.text", "1");
  }
);

When("I click on last created <sale order>", () => {
  cy.get('a[data-name="SAL-ORD-2023-00022"]').click();
});
When("I click on the sale invoice + icon", () => {
  cy.get('button[data-doctype="Sales Invoice"]').click();
});

Then("I will be redirected to the sale invoice page", () => {
  cy.url().should(
    "include",
    "https://agriboratest-automation.nestorhawk.com/app/sales-invoice/new-sales-invoice-1"
  );
});

When("I checked the stock update checkbox and hit on save button", () => {
  cy.get('input[data-fieldname="update_stock"]').click();
  cy.get('button[class="btn btn-primary btn-sm primary-action"]').eq(1).click();
  cy.wait(2000);
  cy.get('button[class="btn btn-primary btn-sm primary-action"]').eq(1).click();
  cy.wait(2000);
  cy.get('button[class="btn btn-primary btn-sm btn-modal-primary"]').click();
  cy.wait(2000);
});

Then(
  "I click on the connections and see the purchase invoice is automatically created for the hub manager should also be updated",
  () => {
    cy.get('a[aria-controls="Connections"]').eq(1).click();
    cy.get('div[data-doctype="Purchase Invoice"] .count').should(
      "have.text",
      "1"
    );
  }
);

When("I click on the payment entry + icon", () => {
  cy.get('button[data-doctype="Payment Entry"]').click();
});

When("the system will redirect to payment entry page", () => {
  cy.url().should(
    "include",
    "https://agriboratest-automation.nestorhawk.com/app/payment-entry/new-payment-entry"
  );
});

When("I select the <Mode of Payment> and hit on save button", () => {
  cy.get('select[data-fieldname="sales_type"]').select("Sales");
  cy.get('input[data-fieldname="mode_of_payment"]').then((dropDown) => {
    cy.wrap(dropDown).click().type("Cash");
    cy.wait(1000);
    cy.get('ul[role="listbox"] li').each((listItem) => {
      if (listItem.text().trim() === "Cash") {
        cy.wrap(listItem).click();
        cy.wait(1000);
      }
    });
  });
  cy.get('input[data-fieldname="paid_amount"]').clear().type(500);
  cy.get('button[class="btn btn-primary btn-sm primary-action"]').eq(1).click();
  cy.wait(2000);
  cy.get('button[class="btn btn-primary btn-sm primary-action"]').eq(1).click();
  cy.wait(2000);
  cy.get('button[class="btn btn-primary btn-sm btn-modal-primary"]').click();
  cy.wait(2000);
});

When("I click on last created <purchase invoice>", () => {
  cy.wait(2000);
  cy.get('a[data-name="M-PI-AGG-2023-00091"]').click();
});

When("Login to the POS app with <email> and <password>", () => {
  const userCreds = {
    usr: "verms@gmail.com",
    pwd: "Loadtap@1",
    device_id:
      "eVl4VmtfTkGKVDd8qapOqb:APA91bGf8KW9mCDFbIfWk8P3SHKHyCo3hz8c9s2GxeZMfcC1AtD-Zm_SxdVu-CunOSVoPADsC-x7-V-EGJFP7za77jMkxstBBqW1JTMSI20IeMzTz11SJxnhjghg",
  };
  const futureDate = Cypress.moment().add(3, "day").format("yyyy-mm-yy");
  cy.log(futureDate);
  const requestBody = {
    order_list: {
      customer: "Purple Customer",
      transaction_date: "2023-10-24 12:57:33",
      delivery_date: futureDate,
      items: [
        {
          item_code: "Cheese",
          qty: 5.0,
        },
      ],
      mode_of_payment: "Cash",
      // "mpesa_no": ""
    },
    sync: 1,
  };

//   cy.request("POST", "https://agriboratest-automation.nestorhawk.com/api/method/agribora.agribora.api.login", userCreds)
//     .its("body")
//     .then((body) => {
//       const api_key = body.message.api_key;
//       const api_secret = body.message.api_secret;

//       cy.request({
//         url: "https://agriboratest-automation.nestorhawk.com/api/method/agribora.agribora.api.create_sales_order",
//         headers: {
//           Authorization: "Token " + api_key + ":" + api_secret,
//         },
//         method: "POST",
//         body: requestBody,
//       }).then((response) => {
//         cy.log(response.body.email);
//         expect(response.status).to.equal(200);
//       });
//     });
//   cy.wait(21000);
});

Then("", () => {});
Then("", () => {});
