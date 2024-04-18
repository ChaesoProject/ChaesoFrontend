import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://10.109.71.12:8000/api/v1/'
});

export default axiosInstance;
