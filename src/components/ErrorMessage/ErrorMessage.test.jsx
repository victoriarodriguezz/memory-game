import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
    test('should render component', () => {
        render(<ErrorMessage />);
        const errorMessage = screen.getByText('There was an error, please try again later.');
        expect(errorMessage).toBeInTheDocument();
    });
});