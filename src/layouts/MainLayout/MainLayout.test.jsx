import React from 'react';
import { render, screen } from '@testing-library/react';
import MainLayout from './MainLayout';

jest.mock('react-router-dom')

describe('MainLayout', () => {
    test('should render layout', () => {
        render(<MainLayout/>);
        const mainLayoutTestId = screen.getByTestId('main-layout');
        expect(mainLayoutTestId).toBeInTheDocument();
    });
});