import PageHeader from './PageHeader';

describe('Page header', () => {
    it('Should render correctly for with title <Test Title> and go back button should not be visible', () => {
        cy.mount(<PageHeader header="Test Title" />);
        cy.get('h1')
            .should('be.visible')
            .contains('Test Title')
            .should('have.css', 'color', 'rgb(26, 99, 245)');
    });

    it('Should render correctly for with title <Test Title> and go back button should be visible', () => {
        cy.mount(<PageHeader header="Test Title" hasBackIcon />);
        cy.get('h1')
            .should('be.visible')
            .should('have.css', 'color', 'rgb(26, 99, 245)');

        cy.get('[data-cy=go-back-btn]').should('be.visible');
    });
});

export {};
