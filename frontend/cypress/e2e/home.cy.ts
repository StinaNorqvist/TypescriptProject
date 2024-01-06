describe("Home page tests", () => {
  it("Visits the home page", () => {
    cy.visit("http://localhost:5173/");
  });

  it("Clicks on the link to clothing", () => {
    cy.visit("http://localhost:5173/");
    cy.get("#clothingLink").click();
  });

  it("Clicks on the link to accessories", () => {
    cy.visit("http://localhost:5173/");
    cy.get("#accessoriesLink").click();
  });
});
