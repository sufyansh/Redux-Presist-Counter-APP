import axios from 'axios';
import { axiosRequestInterceptor, axiosResponseInterceptor } from './Interceptors';

// base axios instance
const baseInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL
  // timeout: 10000
});

// add interceptors to instance
const attachInterceptors = axiosInstance => {
  axiosInstance.interceptors.request.use(
    axiosRequestInterceptor.onFulfilled,
    axiosRequestInterceptor.onRejected
  );

  axiosInstance.interceptors.response.use(
    axiosResponseInterceptor.onFulfilled,
    axiosResponseInterceptor.onRejected
  );
};

attachInterceptors(baseInstance);

export default baseInstance;
