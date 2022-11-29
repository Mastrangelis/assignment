/* eslint-disable no-undef */
import React from 'react';
import Spinner from '.';

describe('Spinner', () => {
    it('Should render small (sm) size spinner with default color without props', () => {
        cy.mount(<Spinner />);
        cy.get('div:last')
            .should('be.visible')
            .should(
                'have.css',
                'border-color',
                'rgba(0, 0, 0, 0) rgb(37, 99, 235) rgb(37, 99, 235)'
            );
    });

    it('Should render small (sm) size spinner with default color with props', () => {
        cy.mount(<Spinner size="sm" color="default" />);
        cy.get('div:last')
            .should('be.visible')
            .should(
                'have.css',
                'border-color',
                'rgba(0, 0, 0, 0) rgb(37, 99, 235) rgb(37, 99, 235)'
            );
    });

    it('Should render medium (md) size spinner with light color with props', () => {
        cy.mount(<Spinner size="md" color="light" />);
        cy.get('div:last')
            .should('be.visible')
            .should(
                'have.css',
                'border-color',
                'rgba(0, 0, 0, 0) rgb(122, 166, 255) rgb(122, 166, 255)'
            );
    });

    it('Should render medium (md) size spinner with disabled color with props', () => {
        cy.mount(<Spinner size="md" color="disabled" />);
        cy.get('div:last')
            .should('be.visible')
            .should(
                'have.css',
                'border-color',
                'rgba(0, 0, 0, 0) rgb(189, 190, 194) rgb(189, 190, 194)'
            );
    });
});

export {};
