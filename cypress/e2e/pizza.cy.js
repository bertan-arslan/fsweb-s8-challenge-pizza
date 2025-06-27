describe("Pizza Sipariş Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Ana ekrandaki 'Acıktım' butonuna tıklayınca sipariş sayfasına gider", () => {
    cy.get("[data-cy=aciktim-button]").click();
    cy.url().should("include", "/OrderPizza");
  });

  it("İsim inputuna metin girilebilir", () => {
    cy.get("[data-cy=aciktim-button]").click();
    cy.get("[data-cy=input-username]").type("Ahmet");
    cy.get("[data-cy=input-username]").should("have.value", "Ahmet");
  });

  it("Birden fazla malzeme seçilebilir", () => {
    cy.get("[data-cy=aciktim-button]").click();
    cy.get("[data-cy=ingredient-checkbox]").eq(0).click();
    cy.get("[data-cy=ingredient-checkbox]").eq(1).click();
    cy.get("[data-cy=ingredient-checkbox]").eq(2).click();
    cy.get("[data-cy=ingredient-checkbox]").eq(3).click();
    cy.get("[data-cy=ingredient-checkbox]:checked").should(
      "have.length.at.least",
      4
    );
  });

  it("Form başarılı şekilde gönderilir ve success sayfasına yönlendirilir", () => {
    cy.get("[data-cy=aciktim-button]").click();


    cy.get("[data-cy=input-username]").type("Mehmet");
    cy.get("[data-cy=size-radio]").first().check({ force: true });
    cy.get("[data-cy=dough-select]").select(1);

    cy.get("[data-cy=ingredient-checkbox]").eq(0).click();
    cy.get("[data-cy=ingredient-checkbox]").eq(1).click();
    cy.get("[data-cy=ingredient-checkbox]").eq(2).click();
    cy.get("[data-cy=ingredient-checkbox]").eq(3).click();


    cy.get("[data-cy=submit-order]").should("not.be.disabled").click();


    cy.url().should("include", "/success");
    cy.contains("SİPARİŞİN ALINDI").should("exist");
  });
});
