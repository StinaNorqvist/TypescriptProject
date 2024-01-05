describe("Home page tests", () => {
  it("Visits the home page", () => {
    cy.visit("http://localhost:5173/");
  });

  it("Clicks on the nav link to clothing", () => {
    cy.visit("http://localhost:5173/");
    cy.get("#clothingLink").click();
  });
});
