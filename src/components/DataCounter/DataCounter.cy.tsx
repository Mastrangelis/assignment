import DataCounter from '.';

describe('Data Counter', () => {
    it('Should render correctly for 10 results', () => {
        cy.mount(<DataCounter totalCount={10} isLoading={false} />);
        cy.get('div:last')
            .should('be.visible')
            .should('have.css', 'display', 'flex')
            .and('have.css', 'align-items', 'center');
        cy.get('span:last')
            .prev()
            .should('be.visible')
            .contains('10')
            .should('have.css', 'color', 'rgb(1, 9, 24)');
        cy.get('span:last')
            .should('be.visible')
            .contains('results')
            .should('have.css', 'color', 'rgb(120, 124, 132)');
    });

    it('Should be spinning when loading', () => {
        cy.mount(<DataCounter totalCount={10} isLoading={true} />);
        cy.get('div:last')
            .should('be.visible')
            .should(
                'have.css',
                'border-color',
                'rgba(0, 0, 0, 0) rgb(37, 99, 235) rgb(37, 99, 235)'
            )
            .and('have.css', 'width', '22px')
            .and('have.css', 'height', '22px');
        cy.get('span:last')
            .should('be.visible')
            .contains('processing request')
            .should('have.css', 'color', 'rgb(120, 124, 132)');
    });
});

export {};
