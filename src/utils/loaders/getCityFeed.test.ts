import axios from 'axios';
import { AxiosResponse } from 'axios';
import { getCityFeed } from './getCityFeed';

// Mock the axios library
jest.mock('axios');

// Mock the environment variables
jest.mock('../../constants/api', () => ({
  TOKEN: 'mockApiKey',
  API_URL: 'https://api.waqi.info/feed/'
}));

describe('getCityFeed function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('should call axios.get with the correct URL', async () => {
    const mockData = { mockData: 'mockValue' };
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: mockData } as AxiosResponse<any>);
    await getCityFeed('Paris');
    expect(axios.get).toHaveBeenCalledWith('https://api.waqi.info/feed/Paris/?token=mockApiKey');
  });

  it('should return data from the response', async () => {
    const mockData = { mockData: 'mockValue' };
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: mockData } as AxiosResponse<any>);
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
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: responseData } as AxiosResponse<any>);
    const result = await getCityFeed('Paris');

    expect(result.status).toEqual('ok');
    expect(result.data.attributions).toContainEqual({
      name: 'World Air Quality Index Project',
      url: 'https://waqi.info/',
    });
  });

  it('should throw an error if axios.get fails', async () => {
    const errorMessage = 'Network Error';
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(new Error(errorMessage));
    await expect(getCityFeed('Paris')).rejects.toThrow(errorMessage);
  });
});
