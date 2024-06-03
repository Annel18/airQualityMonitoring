import axios, { AxiosRequestConfig } from 'axios';

const get = async (url: string, config?: AxiosRequestConfig) => {
  return axios.get(url, config);
};

const post = async (url: string, data?: any, config?: AxiosRequestConfig) => {
  return axios.post(url, data, config);
};

const put = async (url: string, data?: any, config?: AxiosRequestConfig) => {
  return axios.put(url, data, config);
};

const del = async (url: string, config?: AxiosRequestConfig) => {
  return axios.delete(url, config);
};

export { get, post, put, del };
