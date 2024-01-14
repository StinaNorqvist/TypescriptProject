import { BrowserRouter } from "react-router-dom";
import FilterButtons from "../../src/components/FilterButtons";
import { UserProvider } from "../../src/contexts/UserContext";
import { CartProvider } from "../../src/contexts/CartContext";

describe("Footer.tsx", () => {
  beforeEach(() => {
    const receiveProp = cy.stub().as("sendProp");
    cy.intercept("GET", "/api/products/*").as("getProducts");
    cy.mount(
      <>
        <BrowserRouter>
          <UserProvider>
            <CartProvider>
              <FilterButtons sendProp={receiveProp} />
            </CartProvider>
          </UserProvider>
        </BrowserRouter>
      </>
    );
  });

  it("Should send a GET request with the category as endpoint if filter button is clicked", () => {
    cy.get("#filterButtons").should("contain", "Tops").click();
    cy.wait("@getProducts").then((interception) => {
      expect(interception.request.method).to.equal("GET");
      expect(interception.request.url).to.include("/api/products/Tops");
    });
  });
});
