import Footer from "../../src/components/Footer";

describe("Menu.tsx", () => {
  it("mounts Footer", () => {
    cy.mount(<Footer />);
  });
});
