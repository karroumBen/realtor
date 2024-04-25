import axios from 'axios';

export const getBiddingItems = () => {
  return axios.get('/products/customer');
}

export const getTransactions = () => {
  return axios.get('/transaction');
}

export const placeBid = (payload) => {
  const { id, startingPrice } = payload;
  return axios.post(`/bidding/addbid/${id}/${startingPrice}`);
}

