describe("Clothing page tests", () => {
  // ADDS TWO DIFFERENT PRODUCTS TO THE CART
  beforeEach(() => {
    cy.visit("http://localhost:5173/item/8");
    cy.get(".addToCart").click();
    cy.get("#clothingLink").click();
    cy.get(".info").first().click();
    cy.get(".addToCart").click();
  });

  it("Should show the number 2 as the cart amount in the menu", () => {
    cy.get("#cartLink").should("exist");
    cy.get("#cartAmount").should("exist");
    cy.get("p#cartAmount").should("have.text", "2");
  });

  it("Two products should show up in the cart with the right total amount", () => {
    cy.get("#cartLink").click();
    cy.get(".cartInfo").should("contain", "Provence T-Shirt");
    cy.get(".cartInfo").should("contain", "250 SEK");
    cy.get(".cartInfo").should("contain", "White Knit Vest");
    cy.get(".cartInfo").should("contain", "350 SEK");
    cy.get("h1:contains('Total:')").should("have.text", "Total: 600 SEK");
  });

  it("Removes one products and shows the new total amount", () => {
    cy.get("#cartLink").click();
    cy.get("#removeButton").should("exist").first().click();
    cy.get(".cartInfo").should("contain", "White Knit Vest");
    cy.get(".cartInfo").should("not.contain", "Provence T-Shirt");
    cy.get("h1:contains('Total:')").should("have.text", "Total: 350 SEK");
  });
});
