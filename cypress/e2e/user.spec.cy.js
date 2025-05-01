import userData from '../fixtures/users/user-data.json'

describe('Orange HRM Tests', () => {

 const selectorsList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb .oxd-topbar-header-breadcrumb-module",
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongCredentialAlert: "[role='alert']",
  myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
  firstNameField: "[name='firstName']",
  middleName: "[name='middleName']",
  genericField: ".oxd-input--active",
  dataField: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
  dataCloseButton: ".--close",
  submitButton: "[type='submit']"

 }  

  it.only('User Info Update - Success', () => {  // it.skip
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type("FirstNameTest")
    cy.get(selectorsList.middleName).clear().type("MiddleNameest")
    cy.get(selectorsList.genericField).eq(2).clear().type("Lastname")
    // cy.get(selectorsList.genericField).eq(3).clear().type("NickName")
    cy.get(selectorsList.genericField).eq(3).clear().type("EmployeeId")
    cy.get(selectorsList.genericField).eq(4).clear().type("OtherId")
    cy.get(selectorsList.genericField).eq(5).clear().type("Driver")
    cy.get(selectorsList.dataField).clear().type("2025-04-21")
    cy.get(selectorsList.dataCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })

})