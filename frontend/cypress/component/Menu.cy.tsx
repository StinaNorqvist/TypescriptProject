import Menu from "../../src/components/Menu";
import { UserProvider } from "../../src/contexts/UserContext";
import { CartProvider } from "../../src/contexts/CartContext";
import { BrowserRouter } from "react-router-dom";

describe("Menu.tsx", () => {
  beforeEach(() => {
    cy.mount(
      <>
        <BrowserRouter>
          <UserProvider>
            <CartProvider>
              <Menu />
            </CartProvider>
          </UserProvider>
        </BrowserRouter>
      </>
    );
  });

  it("Mounts the Menu component", () => {});

  it("Should render all the text links and lead to the right endpoints", () => {
    cy.get("#homeLink").should("exist").click();
    cy.url().should("include", "/");
    cy.get("#clothingLink").should("exist").click();
    cy.url().should("include", "/clothing");
    cy.get("#accessoriesLink").should("exist").click();
    cy.url().should("include", "/accessories");
    cy.get("#aboutUsLink").should("exist").click();
    cy.url().should("include", "/about");
  });

  it("Should render all the logos and lead to the right endpoints", () => {
    cy.get("#loginLink").should("exist").click();
    cy.url().should("include", "/login");
    cy.get("#loginLink svg").should("be.visible");
    cy.get("#cartLink").should("exist").click();
    cy.url().should("include", "/cart");
    cy.get("#cartLink svg").should("be.visible");
  });

  it("Should have a button for login", () => {
    cy.get("#loginMenuButton").should("exist");
  });
});
