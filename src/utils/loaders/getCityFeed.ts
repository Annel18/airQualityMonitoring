import axios from 'axios';
import { LoaderFunctionArgs } from 'react-router-dom';
import { TOKEN, API_URL } from '../../constants/api';

export const getCityFeed = async (input: LoaderFunctionArgs | string) => {
  let location: string;
  if (typeof input === 'string') {
    location = input;
  } else {
    const { request, params } = input;
    const url = new URL(request.url);
    location = params.location || url.searchParams.get('location') || 'defaultLocation';
  }

  const response = await axios.get(`${API_URL}${location}/?token=${TOKEN}`);
  return response.data;
};
