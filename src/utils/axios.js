// utils/axios.js
import axios from 'axios';
import Cookies from 'js-cookie';

export const axiosWebsite = axios.create({ baseURL: 'https://apisbaseurl.com' });

axiosWebsite.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorResponse = (error.response && error.response.data) || 'Something went wrong';
    return Promise.reject(errorResponse);
  }
);