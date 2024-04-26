import axios from 'axios';

export const getProperties = () => {
  return axios.get('/properties/list');
}

export const addProperty = (payload) => {
  return axios.post('/properties/new', payload);
}

export const updateProperty = (payload) => {
  return axios.post(`/properties/update`, payload);
}
export const deleteProperty = (productId) => {
  return axios.delete(`/properties/delete/${productId}`);
}
