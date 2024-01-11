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

  it("Mounts the Footer component", () => {});
});
