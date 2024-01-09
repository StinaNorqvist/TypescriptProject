import Footer from "../../src/components/Footer";

describe("Footer.tsx", () => {
  it("mounts Footer components", () => {
    cy.mount(<Footer />);
  });
});
