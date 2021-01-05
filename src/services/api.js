import axios from 'axios';

const api = axios.create({
  baseURL: 'https://front-end-test-app.s3.amazonaws.com/menu.json',
});

export default api;
