const dataGridHeaders: string[] = [
    'Model ID',
    'Model Name',
    'Make ID',
    'Make Name',
    'Manufacturer ID',
    'Manufacturer Name',
    'Manufacturer Common Name',
    'Country'
];

describe('Models per Make Screen', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.wait(2000);
    cy.get('[data-cy=data-grid-rows]').children().should('have.length', 91).first().within(() => {
        cy.get('[data-cy=details-btn]').should('be.visible').click()
    })

    cy.wait(1000);
  });

  it('should land to models per make screen and check that it renders successfully', () => {
      // Check the structure of the screen

      cy.location('pathname', { timeout: 10000 })
          .should('eq', '/manufacturers/955/models')
          .end();

      cy.wait(2000);

      cy.get('#root').should('be.visible').should('have.css', 'background-color', 'rgb(246, 248, 255)')
      
      // Check page header
      cy.get('h1').should('be.visible').contains('Models for TESLA, INC.').should('have.css', 'color', 'rgb(26, 99, 245)')
      cy.get('[data-cy=total-count]').should('be.visible').contains("6")

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

          // Check that number of rows in first render in datagrid is correct and that each row has the right stylinh
          cy.get('[data-cy=data-grid-rows]').children().should('have.length', 6).first()
              .should('have.css', 'height', '56px')
              .and('have.css', 'display', 'flex')
              .and('have.css', 'justify-content', 'flex-start')
              .and('have.css', 'align-items', 'center');
        
          cy.get('[data-cy=data-grid-rows]').children().first().should('have.text', '1685Model S441TESLA955TESLA, INC.TeslaUNITED STATES (USA)')
  });
  
  it('Should move back to home screen (manufacturers) by clicking the go back arrow in header', () => {
     cy.get('[data-cy=go-back-btn]').should('be.visible').click();

      cy.wait(1000);

      
      // Check that it navigated to a different page
      cy.location('pathname', { timeout: 10000 })
        .should('eq', '/')
        .end();

      cy.get('h1').should('be.visible').contains('All Manufacturers');
      cy.get('[data-cy=total-count]').should('be.visible').contains("91")
  })
})

export {}