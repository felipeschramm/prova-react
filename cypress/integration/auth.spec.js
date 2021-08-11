/// <reference types="cypress" />

describe("TGl Web", () => {
  it("cria um usuário", () => {
    cy.visit("192.168.0.100:3000/auth");
    cy.get(".sc-fujyAs").click();
    cy.get('[placeholder="Name"]').type("Felipe123456");
    cy.get('[placeholder="Email"]').type("Felipe123456@hotmail.com");
    cy.get('[placeholder="Password"]').type("Felipe123456");
    cy.get(".sc-lmgQwP").click();
  });
  it("autentica um usuário", () => {
    cy.visit("192.168.0.100:3000/auth");
    cy.get('[placeholder="Email"]').focus().type("Felipe123456@hotmail.com");
    cy.get('[placeholder="Password"]').focus().type("Felipe123456");
    cy.get(".sc-kEqXSa").click();
  });
  it("cria uma aposta da Mega-Sena de forma aleatória", () => {
    cy.get(".sc-efHYUO").click();
    cy.get(".fuQSFr").click();
    cy.get(".sc-TtZnY > :nth-child(1)").click();
    cy.get(".sc-hOPeYd").click();

    cy.get(".sc-TtZnY > :nth-child(1)").click();
    cy.get(".sc-hOPeYd").click();

    cy.get(".sc-TtZnY > :nth-child(1)").click();
    cy.get(".sc-hOPeYd").click();

    cy.get(".sc-TtZnY > :nth-child(1)").click();
    cy.get(".sc-hOPeYd").click();

    cy.get(".sc-TtZnY > :nth-child(1)").click();
    cy.get(".sc-hOPeYd").click();

    cy.get(".sc-TtZnY > :nth-child(1)").click();
    cy.get(".sc-hOPeYd").click();

    cy.get(".sc-TtZnY > :nth-child(1)").click();
    cy.get(".sc-hOPeYd").click();
  });
  it("salva  o jogo com sucesso", () => {
    cy.get(".sc-kHWWYL").click();
  });
});
