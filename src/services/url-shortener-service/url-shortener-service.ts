import axios from 'axios';

import { createHttpService } from '../common/http-service-factory';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const axiosHttpService = createHttpService(axiosInstance);
