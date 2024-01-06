describe("Accessories page tests", () => {
  it("Should make a successful get request for all accessories", () => {
    cy.visit("http://localhost:5173/accessories");
    cy.request({
      method: "GET",
      url: "http://localhost:3000/api/accessories",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Should render accessories images on the page", () => {
    cy.visit("http://localhost:5173/accessories");
    cy.get(".productImage").should("exist");
  });

  it("Should render Add To Cart buttons", () => {
    cy.visit("http://localhost:5173/accessories");
    cy.get("button").should("contain", "Add to Cart");
  });

  it("Should render the filter buttons", () => {
    cy.visit("http://localhost:5173/accessories");
    cy.get("#filterButtons").should("contain", "Hat");
  });

  it("Should filter products when a filter button is clicked", () => {
    cy.visit("http://localhost:5173/accessories");
    cy.get("#filterButtons").should("contain", "Hat").click();
    cy.request({
      method: "GET",
      url: "http://localhost:3000/api/accessories/Hat",
    }).then((response) => {
      expect(response.status).to.eq(200);
      console.log(response, "RESPONSE");
      expect(response.body[0]).to.have.property("productname", "Mauve Beanie");
    });
  });
});
