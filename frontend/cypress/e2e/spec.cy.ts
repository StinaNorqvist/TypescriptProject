/// <reference types="cypress" />

describe("My Wren project", function () {
  it("Visits my site", function () {
    cy.visit("http://localhost:5173/");
  });
});
