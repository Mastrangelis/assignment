const dataGridHeaders: string[] = [
    'Manufacturer ID',
    'Manufacturer Name',
    'Manufacturer Common Name',
    'Country',
    'Details'
];

describe('Manufacturers Screen', () => {

  beforeEach(() => {
    cy.visit('/')
  });

   describe('Layout scenarios', () => {
        it('should land to home screen and check that it renders successfully', () => {
            // Check the structure of the screen

            cy.location('pathname', { timeout: 10000 })
                .should('eq', '/')
                .end();

            cy.wait(2000);

            cy.get('#root').should('be.visible').should('have.css', 'background-color', 'rgb(246, 248, 255)')
           
            // Check page header
            cy.get('h1').should('be.visible').contains('All Manufacturers').should('have.css', 'color', 'rgb(26, 99, 245)')
            cy.get('[data-cy=total-count]').should('be.visible').contains("91")

            cy.get('#datagrid ').should(
                'be.visible'
            );

            // Check that dataGrid headers are visible and have correct values
            cy.get('[data-cy=data-grid-table-headers]')
                .children()
                .then(($headers) => {
                    return $headers
                        .map((_, $header) => $header.textContent)
                        .get();
                })
                .then((contents = []) =>
                    assert(
                        JSON.stringify(contents) ===
                            JSON.stringify(dataGridHeaders)
                    )
                );
        });
    });

})

export {}