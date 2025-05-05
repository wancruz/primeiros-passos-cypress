import userData from '../fixtures/users/user-data.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashBoard';
import MenuPage from '../pages/menuPage';
import MyInfoPage from '../pages/myInfoPage';

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {  // it.skip
    loginPage.accessLoginPage()
    loginPage.loginWihtAnyhUser(userData.userSuccess.username,userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.last())
    myInfoPage.fillEmployeeDetails('employeeId', 'otherId', 'driver', '2025-05-02')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  })

})  