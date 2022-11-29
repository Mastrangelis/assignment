/* eslint-disable no-undef */
import React from 'react';
import Layout from '.';

describe('Layout', () => {
    it('Should render correctly', () => {
        cy.mount(
            <Layout>
                <div data-cy="children">Children</div>
            </Layout>
        );
        cy.get('[data-cy=layout]')
            .should('be.visible')
            .should('have.css', 'background-color', 'rgb(246, 248, 255)');

        cy.get('[data-cy=children]').should('be.visible').contains('Children');
    });
});

export {};
