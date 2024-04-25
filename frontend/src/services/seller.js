import axios from 'axios';

export const getSellerProducts = () => {
  return axios.get('/products/seller');
}

export const addProduct = (payload) => {
  return axios.post('/products/addProduct', payload);
}

export const updateProduct = (payload) => {
  return axios.put('/products/update', payload);
}

export const publishProduct = (productId) => {
  return axios.post(`/products/publish/${productId}`);
}
export const deleteProduct = (productId) => {
  return axios.delete(`/products/delete/${productId}`);
}
