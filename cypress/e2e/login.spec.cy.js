import userData from '../fixtures/users/user-data.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashBoard';

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => {

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWihtAnyhUser(userData.userFail.username,userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWihtAnyhUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  })

})  