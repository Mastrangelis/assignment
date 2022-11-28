/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import GoBackButton from '../components/Buttons/GoBackButton';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    navigate: () => jest.fn()
}));

describe('My first snapshot test', () => {
    test('testing app button', () => {
        render(<GoBackButton navigate={() => jest.fn()} />, {
            wrapper: BrowserRouter
        });

        // screen.debug();
        const ancestor = screen.getByTestId('go-back-wrapper');
        expect(ancestor).toBeInTheDocument();

        const descendant = screen.getByTestId('go-back-icon');
        expect(descendant).toBeInTheDocument();

        expect(ancestor).toContainElement(descendant);
    });

    test('testing app buttona', () => {
        render(<GoBackButton navigate={() => jest.fn()} />, {
            wrapper: BrowserRouter
        });

        // screen.debug();
        const button = screen.getByTestId('go-back-wrapper');
        expect(button).toBeInTheDocument();

        userEvent.click(button);
        // screen.debug();
        expect(mockedNavigate).toHaveBeenCalledWith('/');
    });
});
