import {
  When,
  Then,
  Given,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.visit("http://localhost:5173/login");
});

// TEST THE LOGIN FEATURE WITH THE RIGHT PASSWORD
Given("Jag vill logga in med rätt lösenord och ser alla fält", () => {
  cy.get("#userEmail").should("exist");
  cy.get("#userPassword").should("exist");
  cy.get("#loginButton").should("exist");
});

When("Jag har skrivit in rätt lösenord", () => {
  cy.intercept("POST", "/api/users", { statusCode: 200 }).as("goodRequest");
  cy.get("#userEmail").type("stina@gmail.com");
  cy.get("#userPassword").type("password");
  cy.get("#loginButton").should("not.be.disabled").click();
  cy.wait("@goodRequest").then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  });
});

Then("Ska ett meddelande om att inloggningen lyckades renderas", () => {
  cy.get("#loginSuccessful").should("exist");
});

// TEST THE LOGIN FEATURE WITH THE WRONG PASSWORD
Given("Jag vill logga in med fel lösenord och ser alla fält", () => {
  cy.get("#userEmail").should("exist");
  cy.get("#userPassword").should("exist");
  cy.get("#loginButton").should("exist");
});

When("Jag har skrivit in fel lösenord", () => {
  cy.intercept("POST", "/api/users", { statusCode: 500 }).as("badRequest");
  cy.get("#userEmail").type("stina@gmail.com");
  cy.get("#userPassword").type("wrongpassword");
  cy.get("#loginButton").should("not.be.disabled").click();
  cy.wait("@badRequest").then((interception) => {
    // CHECK THE ERROR CODE LATER, MIGHT HAVE TO CHANGE IT:
    expect(interception.response.statusCode).to.eq(500);
  });
});

Then("Ska ett meddelande om att inloggningen misslyckades dyka upp", () => {
  cy.get("#loginUnsuccessful").should("exist");
});
