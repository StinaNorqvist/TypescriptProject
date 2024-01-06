import {
  When,
  Then,
  Given,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.visit("http://localhost:5173/signup");
});

// TEST THE SIGNUP WITH THE CORRECT INFORMATION
Given("Jag vill skapa ett konto och ser alla fält", () => {
  cy.get("#userName").should("exist");
  cy.get("#userEmail").should("exist");
  cy.get("#userPassword").should("exist");
  cy.get("#userAddress").should("exist");
  cy.get("#userZipCode").should("exist");
  cy.get("#userCity").should("exist");
});

When("Jag har skrivit in korrekt information på alla fält", () => {
  cy.get("#userName").type("Sigrid Lönn");
  cy.get("#userEmail").type("sigrid.lönn@gmail.com");
  cy.get("#userPassword").type("password");
  cy.get("#userAddress").type("Stockholmsgatan 3");
  cy.get("#userZipCode").type("43434");
  cy.get("#userCity").type("Göteborg");
});

Then("Ska knappen för att skapa konto bli klickbar", () => {
  cy.get("#signUpButton").should("not.be.disabled").click();
});

// TEST THE SIGNUP WITH THE INCORRECT INFORMATION
Given("Jag vill skapa ett konto och ser alla fält", () => {
  cy.get("#userName").should("exist");
  cy.get("#userEmail").should("exist");
  cy.get("#userPassword").should("exist");
  cy.get("#userAddress").should("exist");
  cy.get("#userZipCode").should("exist");
  cy.get("#userCity").should("exist");
});

When("Jag har skrivit in fel format på min mailadress", () => {
  cy.get("#userName").type("Sigrid Lönn");
  cy.get("#userEmail").type("sigrid.lönn");
  cy.get("#userPassword").type("password");
  cy.get("#userAddress").type("Stockholmsgatan 3");
  cy.get("#userZipCode").type("43434");
  cy.get("#userCity").type("Göteborg");
});

Then(
  "Ska knappen för att skapa konto fortsätta vara icke klickbar och ett felmeddelande visas",
  () => {
    cy.get(".errors").should("exist");
    cy.get("#signUpButton").should("be.disabled");
  }
);
