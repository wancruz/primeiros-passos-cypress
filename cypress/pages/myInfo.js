class MyInfo {
  selectorList() {
    const selectors = {
      firstNameField: "[name='firstName']",
      middleName: "[name='middleName']",
      genericField: ".oxd-input--active",
      dataField:
        ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
      dataCloseButton: ".--close",
      submitButton: "[type='submit']",
      genericComboBox: ".oxd-select-text-input",
    };

    return selectors;
  }

  MyInfoUser() {
    cy.get(this.selectorInfo.firstNameField).clear().type("FirstNameTest");
    cy.get(this.selectorInfo.middleName).clear().type("MiddleNameest");
    cy.get(this.selectorInfo.genericField).eq(2).clear().type("Lastname");
    // cy.get(selectorsList.genericField).eq(3).clear().type("NickName")
    cy.get(this.selectorInfo.genericField).eq(3).clear().type("EmployeeId");
    cy.get(this.selectorInfo.genericField).eq(4).clear().type("OtherId");
    cy.get(this.selectorInfo.genericField).eq(5).clear().type("Driver");
    cy.get(this.selectorInfo.dataField).clear().type("2025-04-21");
    cy.get(this.selectorInfo.dataCloseButton).click();

    cy.get(this.selectorInfo.genericComboBox).eq(0).click();
    cy.contains("American").click();
    cy.get(this.selectorInfo.genericComboBox).eq(1).click();
    cy.contains("Single").click();

    cy.get(this.selectorInfo.submitButton).eq(0).click();
    cy.get("body").should("contain", "Successfully Updated");
    cy.get(".oxd-toast-close");
  }
}
