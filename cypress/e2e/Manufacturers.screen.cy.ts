/* eslint-disable no-undef */
const dataGridHeaders: string[] = [
    'Manufacturer ID',
    'Manufacturer Common Name',
    'Country',
    'Details'
];

describe('Manufacturers Screen', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should land to home (manufacturers) screen and check that it renders successfully', () => {
        // Check the structure of the screen

        cy.location('pathname', { timeout: 10000 }).should('eq', '/').end();

        cy.wait(2000);

        cy.get('#root')
            .should('be.visible')
            .should('have.css', 'background-color', 'rgb(246, 248, 255)');

        // Check page header
        cy.get('h1')
            .should('be.visible')
            .contains('All Manufacturers')
            .should('have.css', 'color', 'rgb(26, 99, 245)');
        cy.get('[data-cy=total-count]').should('be.visible').contains('91');

        cy.get('#datagrid ').should('be.visible');

        // Check that dataGrid headers are visible and have correct values
        cy.get('[data-cy=data-grid-table-headers]')
            .children()
            .then(($headers) => {
                return $headers.map((_, $header) => $header.textContent).get();
            })
            .then((contents = []) =>
                assert(
                    JSON.stringify(contents) === JSON.stringify(dataGridHeaders)
                )
            );

        // Check that number of rows in first render in datagrid is correct and that each row has the right stylinh
        cy.get('[data-cy=data-grid-rows]')
            .children()
            .should('have.length', 91)
            .first()
            .should('have.css', 'height', '56px')
            .and('have.css', 'display', 'flex')
            .and('have.css', 'justify-content', 'flex-start')
            .and('have.css', 'align-items', 'center');

        cy.get('[data-cy=data-grid-rows]')
            .children()
            .first()
            .should('have.text', '955TeslaUNITED STATES (USA)');

        // Check that load more button is visible at the end of table
        cy.get('[data-cy=scrollable-div]')
            .scrollTo('bottom')
            .then(() => {
                cy.get('[data-cy=load-more-btn]').should('be.visible');
            });
    });

    it('Should move to next page by clicking load more button', () => {
        // Check that load more button is visible at the end of table and click it to load more pages
        cy.get('[data-cy=scrollable-div]')
            .scrollTo('bottom')
            .then(() => {
                cy.get('[data-cy=load-more-btn]').should('be.visible').click();
            });

        cy.wait(1000);

        // Check now that we have more results than 91
        cy.get('[data-cy=total-count]').should('be.visible').contains('175');
    });

    it('Should move to models per make screen (for Tesla) by clicking on the details icon of first row', () => {
        cy.get('[data-cy=data-grid-rows]')
            .children()
            .should('have.length', 91)
            .first()
            .within(() => {
                cy.get('[data-cy=details-btn]').should('be.visible').click();
            });

        cy.wait(1000);

        // Check that it navigated to a different page
        cy.location('pathname', { timeout: 10000 })
            .should('eq', '/manufacturers/955/models')
            .end();

        cy.get('h1').should('be.visible').contains('Models for TESLA, INC.');

        cy.get('[data-cy=total-count]').should('be.visible').contains('6');
    });
});

export {};
