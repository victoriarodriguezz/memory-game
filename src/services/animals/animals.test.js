import http from '../../utils/httpClient';
import animalsService from './animals';

jest.mock('../../utils/httpClient');

describe('animals', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should render component', async() => {
        const mockResponseData = ['animal1', 'animal2'];
        http.get.mockResolvedValue(mockResponseData);
        const result = await animalsService().getAnimals();
        expect(http.get).toHaveBeenCalledWith(
          'api/content/spaces/animals/types/game/entries?per_page=10'
        );
        expect(result).toEqual(mockResponseData);
    });
});