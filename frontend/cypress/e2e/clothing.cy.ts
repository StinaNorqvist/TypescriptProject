describe("Clothing page tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/clothing");
  });
  it("Should make a successful get request for all clothing", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/api/products",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Should render clothing images on the page", () => {
    cy.get(".productImage").should("exist");
  });

  // it("Should render Add To Cart buttons", () => {
  //   cy.get("button").should("contain", "Add to Cart");
  // });

  it("Should render the filter buttons", () => {
    cy.get("#filterButtons").should("contain", "Tops");
  });

  it("Should filter products when a filter button is clicked", () => {
    cy.get("#filterButtons").should("contain", "Tops").click();
    cy.request({
      method: "GET",
      url: "http://localhost:3000/api/products/Tops",
    }).then((response) => {
      expect(response.status).to.eq(200);
      console.log(response, "RESPONSE");
      expect(response.body[0]).to.have.property(
        "productname",
        "White Knit Vest"
      );
      expect(response.body[1]).to.have.property(
        "productname",
        "Provence T-Shirt"
      );
    });
  });

  it("Should render the name and price of the filtered products", () => {
    cy.get("#filterButtons").should("contain", "Tops").click();
    cy.get(".info").should("contain", "White Knit Vest");
    cy.get(".info").should("contain", "350 SEK");
    cy.get(".info").should("contain", "Provence T-Shirt");
    cy.get(".info").should("contain", "250 SEK");
    cy.get(".info").should("contain", "Mesh Long Sleeve Top");
    cy.get(".info").should("contain", "300 SEK");
    cy.get(".info").should("contain", "Red Tank Top");
    cy.get(".info").should("contain", "150 SEK");
  });
});
