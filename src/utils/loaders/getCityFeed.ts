import axios from 'axios';
import { LoaderFunctionArgs } from 'react-router-dom';

export const getCityFeed = async (input: LoaderFunctionArgs | string) => {
  const token = process.env.API_KEY;

  let location: string;
  if (typeof input === 'string') {
    location = input;
  } else {
    const { request, params } = input;
    const url = new URL(request.url);
    location = params.location || url.searchParams.get('location') || 'defaultLocation';
  }

  const response = await axios.get(`https://api.waqi.info/feed/${location}/?token=${token}`);
  return response.data;
};
