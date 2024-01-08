import {
  When,
  Then,
  Given,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.visit("http://localhost:5173/");
});

Given("Jag är på hemsidan och knappen visar Log in", () => {
  cy.get("#loginMenuButton").should("contain", "Log in");
});

When("Jag har loggat in", () => {
  cy.visit("http://localhost:5173/login");
  cy.intercept("POST", "/api/login", { statusCode: 200 }).as("goodRequest");
  cy.get("#userEmail").type("stina@gmail.com");
  cy.get("#userPassword").type("password");
  cy.get("#loginButton").click().wait(3000);
  cy.wait("@goodRequest").then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  });
});

Then("Ska knappen visa Log out istället", () => {
  cy.get("#loginMenuButton").should("contain", "Log out");
});
