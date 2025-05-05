class MyInfoPage {
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

  fillPersonalDetails(firstName, middleName, lastname) {
    cy.get(this.selectorList().firstNameField).clear().type(firstName);
    cy.get(this.selectorList().middleName).clear().type(middleName);
    cy.get(this.selectorList().genericField).eq(2).clear().type(lastname);
    // cy.get(selectorsList.genericField).eq(3).clear().type("NickName")
  }

  fillEmployeeDetails(employeeId, otherId, driver, data) {
    cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId);
    cy.get(this.selectorList().genericField).eq(4).clear().type(otherId);
    cy.get(this.selectorList().genericField).eq(5).clear().type(driver);
    cy.get(this.selectorList().dataField).clear().type(data);
    cy.get(this.selectorList().dataCloseButton).click();
  }

  saveForm() {
    cy.get(this.selectorList().submitButton).eq(0).click();
    cy.get("body").should("contain", "Successfully Updated");
    cy.get(".oxd-toast-close");
  }

  fillStatus() {
    cy.get(this.selectorList().genericComboBox).eq(0).click();
    cy.contains("American").click();
    cy.get(this.selectorList().genericComboBox).eq(1).click();
    cy.contains("Single").click();
  }

}
export default MyInfoPage;
