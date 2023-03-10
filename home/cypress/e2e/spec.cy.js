describe("my first e2e test", () => {
  it("should add an item to the cart", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#app").click();
    cy.get("#showlogin").click();
    cy.get("#loginbtn").click();
    cy.get("#showcart_span").click();
    cy.get("#addToCart_1").click();
    cy.get("#clearcart").click();
    cy.get("#addToCart_2").click();
    cy.get("#cart").click();
    cy.get("#grand_total").should("contain", "$8.99");
  });
});
