describe("Home page tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Should render a menu and a footer", () => {
    cy.get("#menu").should("exist");
    cy.get("#footerDiv").should("exist");
  });

  it("Should show the big image home page image", () => {
    cy.get("#homeImage").should("exist");
  });
});
