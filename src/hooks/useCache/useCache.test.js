import { renderHook, act } from '@testing-library/react';
import useCache from './useCache';

Object.defineProperty(window, 'localStorage', {
    value: (() => {
        let store = {};
        return {
            getItem: jest.fn(key => store[key] || null),
            setItem: jest.fn((key, value) => {
                store[key] = value.toString();
            }),
        };
    })(),
});

const testUserName = 'Test User Name';
describe('useCache', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return default data', () => {
        const { result } = renderHook(() => useCache());
        expect(result.current.userName).toBe('');
    });

    it('should return the user name setted in localStorage', () => {
        localStorage.setItem('user-name', testUserName);
        const { result } = renderHook(() => useCache());
        expect(result.current.userName).toBe(testUserName);
    });

    it('should set a new value for the user name', () => {
        const { result } = renderHook(() => useCache())

        act(() => {
            result.current.updateUserName(testUserName);
        });
        expect(localStorage.setItem).toHaveBeenCalledWith('user-name', testUserName);
        expect(result.current.userName).toBe(testUserName);
    });
});