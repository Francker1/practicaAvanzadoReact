import axios from "axios";
import { API_URL } from "./constants/config-data";

/**
 * Method GET all Advertisements
 */
export const getAllAds = async () => {
  const url = `${API_URL}/anuncios`;

  axios.defaults.withCredentials = true;
  const res = await axios.get(url);
  return res.data.results;
};

export const getAdByID = async (adId) => {
  const url = `${API_URL}/anuncios/${adId}`;

  axios.defaults.withCredentials = true;
  const res = axios.get(url);
  return res;
};

export const getTags = async () => {
  const url = `${API_URL}/tags`;

  axios.defaults.withCredentials = true;
  const res = axios.get(url);
  return res;
};

export const getFilteredAds = async (url) => {
  axios.defaults.withCredentials = true;

  const res = axios.get(url);
  return res;
};

export const updateAdvert = async (adId, data) => {
  const url = `${API_URL}/anuncios/${adId}`;

  axios.defaults.withCredentials = true;
  const res = axios.put(url, data);
  return res;
};

export const registerUser = async (username, password) => {
  const url = `${API_URL}/register`;
  const res = await axios.post(url, {
    username,
    password,
  });

  return res;
};

export const loginUser = async (username, password) => {
  const url = `${API_URL}/login`;
  const res = await axios.post(url, {
    username,
    password,
  });
  return res;
};
