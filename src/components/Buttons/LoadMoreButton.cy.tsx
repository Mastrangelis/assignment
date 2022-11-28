import LoadMoreButton from './LoadMoreButton';

describe('LoadMoreButton', () => {
    it('Should render correctly without props', () => {
        cy.mount(<LoadMoreButton />);
        cy.get('[data-cy=load-more-btn]')
            .should('be.visible')
            .should('have.css', 'background-color', 'rgb(251, 251, 251)')
            .and('have.css', 'display', 'flex')
            .and('have.css', 'justify-content', 'center')
            .and('have.css', 'padding', '10px')
            .and('have.css', 'align-items', 'center');
        cy.get('span').should('be.visible').contains('Load more');
        cy.wait(500);
    });

    it('Should be rendering correctly when loading', () => {
        cy.mount(<LoadMoreButton isLoading />);
        cy.get('[data-cy=load-more-btn]').should('be.visible');
        cy.get('.react-loading-skeleton').should('be.visible');
    });

    it('Should be able to click button and display alert', () => {
        cy.mount(
            <LoadMoreButton
                isLoading={false}
                onLoadMore={() => alert('Clicked!')}
            />
        );
        cy.get('[data-cy=load-more-btn]').should('be.visible').click();
    });
});

export {};
