import FoodButton from "../../src/FoodButton";

// Komponent-test
describe("FoodButton.tsx", () => {
  it("Checks that the foodbutton increase with 1 each time", () => {
    cy.mount(<FoodButton />);
    cy.get("button").should("contain", "0");
    cy.get("button").click();
    cy.get("button").should("contain", "1");
    cy.get("button").click();
    cy.get("button").should("contain", "2");
    cy.get("button").click();
    cy.get("button").should("contain", "3");
  });
});
