import { getCityFeed } from './getCityFeed';
import * as httpMethods from '../httpMethods';
import { AxiosResponse } from 'axios';

// Mock the methods library
jest.mock('../httpMethods');

// Mock the environment variables
jest.mock('../../constants/api', () => ({
  TOKEN: 'mockApiKey',
  API_URL: 'https://api.waqi.info/feed/'
}));

describe('getCityFeed function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('should call get with the correct URL', async () => {
    const mockData = { mockData: 'mockValue' };
    (httpMethods.get as jest.MockedFunction<typeof httpMethods.get>).mockResolvedValueOnce({
      data: mockData,
    } as AxiosResponse);
    await getCityFeed('Paris');
    expect(httpMethods.get).toHaveBeenCalledWith('https://api.waqi.info/feed/Paris/?token=mockApiKey');
  });

  it('should return data from the response', async () => {
    const mockData = { mockData: 'mockValue' };
    (httpMethods.get as jest.MockedFunction<typeof httpMethods.get>).mockResolvedValueOnce({
      data: mockData,
    } as AxiosResponse);
    const result = await getCityFeed('Paris');
    expect(result).toEqual(mockData);
  });

  it('should return correct status and attributions', async () => {
    const responseData = {
      status: 'ok',
      data: {
        attributions: [
          {
            url: 'https://waqi.info/',
            name: 'World Air Quality Index Project',
          },
        ],
      },
    };
    (httpMethods.get as jest.MockedFunction<typeof httpMethods.get>).mockResolvedValueOnce({
      data: responseData,
    } as AxiosResponse);
    const result = await getCityFeed('Paris');

    expect(result.status).toEqual('ok');
    expect(result.data.attributions).toContainEqual({
      name: 'World Air Quality Index Project',
      url: 'https://waqi.info/',
    });
  });

  it('should throw an error if get fails', async () => {
    const errorMessage = 'Network Error';
    (httpMethods.get as jest.MockedFunction<typeof httpMethods.get>).mockRejectedValueOnce(new Error(errorMessage));
    await expect(getCityFeed('Paris')).rejects.toThrow(errorMessage);
  });
});
