import userData from '../fixtures/users/user-data.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashBoard';
import MenuPage from '../pages/menuPage';

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()


describe('Orange HRM Tests', () => {

 const selectorsList = {
  

 
 }  

  it.only('User Info Update - Success', () => {  // it.skip
    loginPage.accessLoginPage()
    loginPage.loginWihtAnyhUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    // cy.get(selectorsList.myInfoButton).click()
    // cy.get(selectorsList.firstNameField).clear().type("FirstNameTest")
    // cy.get(selectorsList.middleName).clear().type("MiddleNameest")
    // cy.get(selectorsList.genericField).eq(2).clear().type("Lastname")
    // // cy.get(selectorsList.genericField).eq(3).clear().type("NickName")
    // cy.get(selectorsList.genericField).eq(3).clear().type("EmployeeId")
    // cy.get(selectorsList.genericField).eq(4).clear().type("OtherId")
    // cy.get(selectorsList.genericField).eq(5).clear().type("Driver")
    // cy.get(selectorsList.dataField).clear().type("2025-04-21")
    // cy.get(selectorsList.dataCloseButton).click()

    // cy.get(selectorsList.genericComboBox).eq(0).click()
    // cy.contains('American').click()
    // cy.get(selectorsList.genericComboBox).eq(1).click()
    // cy.contains('Single').click()

    // cy.get(selectorsList.submitButton).eq(0).click()
    // cy.get('body').should('contain', 'Successfully Updated')
    // cy.get('.oxd-toast-close')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })

})