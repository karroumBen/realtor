import axios from 'axios';

export const login = (credentials) => {
  return axios.post('/auth/login', credentials);
}

export const register = (userDetails) => {
  return axios.post(`/auth/register`, userDetails);
}