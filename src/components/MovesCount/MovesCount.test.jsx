import React from 'react';
import { render, screen } from '@testing-library/react';
import MovesCount from './MovesCount';

describe('MovesCount', () => {
    test('should render component', () => {
        render(<MovesCount hits={0} fails={0}/>);
        const componentById = screen.getByTestId('moves-count');
        expect(componentById).toBeInTheDocument();
    });

    test('should render plural hits', () => {
        render(<MovesCount hits={10} fails={0}/>);
        const hitsText = screen.getByText('hits')
        expect(hitsText).toBeInTheDocument();
    });

    test('should render singular hit', () => {
        render(<MovesCount hits={1} fails={0}/>);
        const hitText = screen.getByText('hit')
        expect(hitText).toBeInTheDocument();
    });

    test('should render plural fails', () => {
        render(<MovesCount hits={0} fails={10}/>);
        const failsText = screen.getByText('fails')
        expect(failsText).toBeInTheDocument();
    });

    test('should render singular fail', () => {
        render(<MovesCount hits={0} fails={1}/>);
        const failText = screen.getByText('fail')
        expect(failText).toBeInTheDocument();
    });
});