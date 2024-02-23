import { renderHook } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';
import animalsService from '../../services/animals';
import useAnimals from './useAnimals';

jest.mock('../../services/animals');
jest.mock('@tanstack/react-query', () => ({
    useQuery: jest.fn(),
}));

const defaultData = {
    data: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
}

describe('useAnimals', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        animalsService.mockReturnValue({ getAnimals: jest.fn() });
    });

    it('should return default data', async () => {
        useQuery.mockReturnValue(defaultData);
        const { result } = renderHook(() => useAnimals());

        expect(result.current.isError).toBeFalsy;
        expect(result.current.isSuccess).toBeFalsy;
        expect(result.current.isLoading).toBeFalsy;
        expect(result.current.animals).toStrictEqual([]);
    });
});

