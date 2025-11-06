describe('Newsletter Subscribe Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("allow users to subscribe to the email list", () => {
        cy.getByData('email-input').type('akki@gmail.com')
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('exist').contains('akki@gmail.com')
    })

    it("does not allow an invalid email address", () => {
        cy.getByData('email-input').type('akki')
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('not.exist')
    })

    it('shows error message for already subscribed email', () => {
        cy.getByData('email-input').type('john@example.com');
        cy.getByData('submit-button').click();
        cy.getByData('server-error-message').should('exist').contains('Error: john@example.com already exists. Please use a different email address.')
    })
})