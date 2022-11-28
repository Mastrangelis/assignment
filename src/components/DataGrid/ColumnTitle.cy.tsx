import ColumnTitle from './ColumnTitle';

describe('Column Title', () => {
    it('Should render successfully', () => {
        cy.mount(
            <ColumnTitle
                title="Column Test"
                onClick={() => alert('Clicked!')}
                selected={false}
            />
        );
    });

    it('Should render column title and center text at end of the cell with position end', () => {
        cy.mount(
            <ColumnTitle
                title="Column Test"
                onClick={() => alert('Clicked!')}
                selected={false}
                position="end"
            />
        );
        cy.get('[data-cy=column-wrapper]')
            .should('be.visible')
            .should('have.css', 'justify-content', 'flex-end');
    });

    it('Should render column title and center text at center of the cell with position center', () => {
        cy.mount(
            <ColumnTitle
                title="Column Test"
                onClick={() => alert('Clicked!')}
                selected={false}
                position="center"
            />
        );
        cy.get('[data-cy=column-wrapper]')
            .should('be.visible')
            .should('have.css', 'justify-content', 'center');
    });

    it('Should render column title and center text at start of the cell with position start', () => {
        cy.mount(
            <ColumnTitle
                title="Column Test"
                onClick={() => alert('Clicked!')}
                selected={false}
                position="start"
            />
        );
        cy.get('[data-cy=column-wrapper]')
            .should('be.visible')
            .should('have.css', 'justify-content', 'flex-start');
    });
});

export {};
