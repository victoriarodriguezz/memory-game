import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BehindCard from './BehindCard';

const onCardClick = jest.fn();
describe('BehindCard', () => {
    test('should render component', () => {
        render(<BehindCard onCardClick={onCardClick} />);
        const questionMark = screen.getByText('?');
        expect(questionMark).toBeInTheDocument();
    });

    test('should click card', () => {
        render(<BehindCard onCardClick={onCardClick} />);
        const card = screen.getByTestId('behind-card');
        fireEvent.click(card);
        expect(onCardClick).toBeCalledTimes(1);
    });
});