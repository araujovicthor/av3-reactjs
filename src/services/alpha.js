import axios from 'axios';

const alpha = axios.create({
  baseURL: 'https://www.alphavantage.co/',
});

export default alpha;
