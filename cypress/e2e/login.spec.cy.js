describe('Orange HRM Tests', () => {
  it('Login - Success', () => {  // it.skip
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(".oxd-topbar-header-breadcrumb .oxd-topbar-header-breadcrumb-module").contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Test')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Test')
    cy.get('.oxd-button').click()
    cy.get("[role='alert']")
  })

})