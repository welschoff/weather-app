import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.open-meteo.com/v1',
  timeout: 8000,
});

export default apiClient;
