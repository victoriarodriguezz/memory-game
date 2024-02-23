import React from 'react';
import { render, screen } from '@testing-library/react';
import Page404 from './Page404';

jest.mock('react-router-dom')

describe('Page404', () => {
    test('should render component', () => {
        render(<Page404 />);
        const pageNotFoundText = screen.getByText('Sorry, page not found!');
        expect(pageNotFoundText).toBeInTheDocument();
    });
});