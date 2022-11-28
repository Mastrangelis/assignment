import GoBackButton from './GoBackButton';

describe('Go Back Button', () => {
    it('Should render correctly', () => {
        cy.mount(<GoBackButton navigate={() => alert('Clicked navigate')} />);
        cy.get('[data-cy=go-back-btn]')
            .should('be.visible')
            .should('have.css', 'margin-right', '8px')
            .and('have.css', 'cursor', 'pointer');

        cy.get('img')
            .should('have.attr', 'src', '/arrow-line-left.svg')
            .and('have.attr', 'alt', 'Go Back')
            .and('have.attr', 'height', '42')
            .and('have.attr', 'width', '42');
    });

    // it('Should be rendering correctly when loading', () => {
    //     cy.mount(<LoadMoreButton isLoading />);
    //     cy.get('[data-cy=go-back-btn]').should('be.visible');
    //     cy.get('.react-loading-skeleton').should('be.visible');
    // });

    it('Should be able to click button and display alert', () => {
        cy.mount(<GoBackButton navigate={() => alert('Clicked navigate')} />);
        cy.get('[data-cy=go-back-btn]').should('be.visible').click();
    });
});

export {};
