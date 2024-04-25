import axios from 'axios';

(() => {
  axios.interceptors.request.use(function (config) {
    const accessToken = localStorage.getItem('accessToken');

    if(accessToken) {
      config.headers.Authorization = `Basic ${accessToken}`;
    }
  
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
})();