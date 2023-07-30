import axios from 'axios';

const axiosClient = axios.create();

if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'development') {
  axiosClient.defaults.baseURL = 'http://localhost:8080';
} else {
  axiosClient.defaults.baseURL = 'liveserver version ';
}

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': 'no-cors',
  Authentication: localStorage.getItem('ACC_KEY'),
};

axiosClient.defaults.timeout = 2000;

export default axiosClient;
