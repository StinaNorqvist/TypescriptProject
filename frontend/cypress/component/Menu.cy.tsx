import Menu from "../../src/components/Menu";
import { UserProvider } from "../../src/contexts/UserContext";
import { CartProvider } from "../../src/contexts/CartContext";
import { BrowserRouter } from "react-router-dom";

describe("Menu.tsx", () => {
  it("mounts Menu", () => {
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
});
