describe("Clothing page tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/item/7");
    cy.get(".addToCart").click();
    cy.get(".addToCart").click();
  });

  it("Should show the number 1 as the cart amount in the menu", () => {
    cy.get("#cartLink").should("exist");
    cy.get("#cartAmount").should("exist");
    cy.get("p#cartAmount").should("have.text", "2");
  });

  it("The product with the id 7 should show up in the cart", () => {
    cy.get("#cartLink").click();
    cy.get(".cartInfo").should("contain", "White Knit Vest");
    cy.get(".cartInfo").should("contain", "350 SEK");
    cy.get("h1:contains('Total:')").should("have.text", "Total: 700 SEK");
  });
});
