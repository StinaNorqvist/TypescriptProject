describe("Clothing page tests", () => {
  it("Should make a successful get request for all clothing", () => {
    cy.visit("http://localhost:5173/clothing");
    cy.request({
      method: "GET",
      url: "http://localhost:3000/api/products",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Should render clothing images on the page", () => {
    cy.visit("http://localhost:5173/clothing");
    cy.get(".productImage").should("exist");
  });

  it("Should render Add To Cart buttons", () => {
    cy.visit("http://localhost:5173/clothing");
    cy.get("button").should("contain", "Add to Cart");
  });

  it("Should render the filter buttons", () => {
    cy.visit("http://localhost:5173/clothing");
    cy.get("#filterButtons").should("contain", "Top");
  });

  it("Should filter products when a filter button is clicked", () => {
    cy.visit("http://localhost:5173/clothing");
    cy.get("#filterButtons").should("contain", "Top").click();
    cy.request({
      method: "GET",
      url: "http://localhost:3000/api/products/Top",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
