/* eslint-disable no-console */
import { anyFIXME } from '@/src/types/any-fixme';
import axios, { AxiosResponse } from 'axios';

import { createHttpService } from '../common/http-service-factory';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

const ENDPOINTS = {
  getAllUrls: '/api/url',
  shortenUrl: '/api/url/shorten',
};

const handleError = (error: anyFIXME): never => {
  if (axios.isAxiosError(error)) {
    console.error('Axios error:', error.response?.status, error.response?.data);
  } else {
    console.error('Unknown error:', error);
  }
  throw error;
};

export const getAllUrlsByMark = async <T>(): Promise<anyFIXME> => {
  try {
    const axiosHttpService = createHttpService(axiosInstance);
    const response: AxiosResponse<T> = await axiosHttpService.get(
      ENDPOINTS.getAllUrls,
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const shortenUrl = async <T>(
  originalUrl: anyFIXME,
): Promise<anyFIXME> => {
  try {
    const axiosHttpService = createHttpService(axiosInstance);
    const response: AxiosResponse<T> = await axiosHttpService.post(
      ENDPOINTS.shortenUrl,
      JSON.stringify({ originalUrl }),
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
