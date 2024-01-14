import { BrowserRouter } from "react-router-dom";
import Footer from "../../src/components/Footer";
import { UserProvider } from "../../src/contexts/UserContext";
import { CartProvider } from "../../src/contexts/CartContext";

describe("Footer.tsx", () => {
  beforeEach(() => {
    cy.mount(
      <>
        <BrowserRouter>
          <UserProvider>
            <CartProvider>
              <Footer />
            </CartProvider>
          </UserProvider>
        </BrowserRouter>
      </>
    );
  });

  it("Should render the Wren logo in the footer", () => {
    cy.get(".TLogo").should("exist");
  });

  it("Should render all the links and lead to the right endpoints", () => {
    cy.get(".TLogo").should("exist").click();
    cy.url().should("include", "/");
    cy.get("#footerDiv").contains("Home").click();
    cy.url().should("include", "/");
    cy.get("#footerDiv").contains("Clothing").click();
    cy.url().should("include", "/clothing");
    cy.get("#footerDiv").contains("Accessories").click();
    cy.url().should("include", "/accessories");
    cy.get("#footerDiv").contains("About Us").click();
    cy.url().should("include", "/about");
  });

  it("Should check the styling of the footer div", () => {
    cy.get("#footerDiv").should("have.css", "height", "100px");
    cy.get("#footerDiv").should("have.css", "padding-top", "20px");
  });

  it("Should check the stying of the menu items", () => {
    cy.get(".menuItem").should(
      "have.css",
      "text-decoration",
      "none solid rgb(0, 0, 0)"
    );
    cy.get(".menuItem").should("have.css", "margin-right", "50px");
  });
});
