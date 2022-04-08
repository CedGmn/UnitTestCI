describe("Calculator", () => {
    it("Test addition", () => {
      cy.visit("http://localhost:3000");
      cy.contains("1").click();
      cy.contains("+").click();
      cy.contains("2").click();
      cy.contains("=").click();
      cy.get(".result").contains("3");
    });
  });
  
  describe("Calculator", () => {
    it("Test minor", () => {
      cy.visit("http://localhost:3000");
      cy.contains("2").click();
      cy.contains("-").click();
      cy.contains("3").click();
      cy.contains("=").click();
      cy.get(".result").contains("1");
    });
  });
    
  describe("Calculator", () => {
    it("Test minor", () => {
      cy.visit("http://localhost:3000");
      cy.contains("2").click();
      cy.contains("-").click();
      cy.contains("3").click();
      cy.contains("=").click();
      cy.get(".result").contains("1");
    });
  });

  describe("Calculator", () => {
    it("Test division", () => {
      cy.visit("http://localhost:3000");
      cy.contains("6").click();
      cy.contains("/").click();
      cy.contains("2").click();
      cy.contains("=").click();
      cy.get(".result").contains("3");
    });
  });

  
  describe("Calculator", () => {
    it("Test modulo", () => {
      cy.visit("http://localhost:3000");
      cy.contains("5").click();
      cy.contains("%").click();
      cy.contains("2").click();
      cy.contains("=").click();
      cy.get(".result").contains("1");
    });
  });

  describe("Calculator", () => {
    it("Test square", () => {
      cy.visit("http://localhost:3000");
      cy.contains("1").click();
      cy.contains("6").click();
      cy.contains("√x").click();
      cy.contains("=").click();
      cy.get(".result").contains("4");
    });
  });

  describe("Calculator", () => {
    it("Test multiplicator", () => {
      cy.visit("http://localhost:3000");
      cy.contains("6").click();
      cy.contains("*").click();
      cy.contains("2").click();
      cy.contains("=").click();
      cy.get(".result").contains("12");
    });
  });