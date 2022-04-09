describe("Example Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3030");
  });

  it("should show something", () => {
    cy.findByRole("button", { name: /boop/i }).click();
  });
});
