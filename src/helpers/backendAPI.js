import axios from 'axios';

const BASE_URI = 'https://daredrop-streaming-backend.onrender.com';

export const getStreamersAPI = async (page, limit) => {
  try {
    const response = await axios.get(
      `${BASE_URI}/api/streamers?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (e) {
    if (axios.isCancel(e)) {
      return;
    }
    console.error(e);
  }
};

export const fetchAPI = async (method, address, data) => {
  try {
    let response;

    if (method === 'get') {
      response = await axios.get(`${BASE_URI}${address}`);
    } else if (method === 'post') {
      response = await axios.post(`${BASE_URI}${address}`, data);
    } else if (method === 'put') {
      response = await axios.put(`${BASE_URI}${address}`, data);
    }

    return response.data;
  } catch (e) {
    if (axios.isCancel(e)) {
      return;
    }
    console.error(e);
  }
};
