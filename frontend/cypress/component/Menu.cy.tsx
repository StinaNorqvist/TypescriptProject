import Menu from "../../src/components/Menu";
import { UserProvider } from "../../src/contexts/UserContext";

describe("Menu.tsx", () => {
  it("mounts Menu", () => {
    cy.mount(
      <UserProvider>
        <Menu />
      </UserProvider>
    );
  });
});
