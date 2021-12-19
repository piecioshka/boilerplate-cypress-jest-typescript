describe('General', function () {
    it('should display a logo', function () {
        cy.visit('/blog/');
        cy.get('#me img');
    });

    it('should redirect to homepage after click on logo', () => {
        cy.visit('/blog/');
        cy.get('#me img').click();
        cy.url().should('equal', 'https://piecioshka.pl/');
    });
});
