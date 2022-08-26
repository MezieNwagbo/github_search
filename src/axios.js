import axios from 'axios';

var URL = require('url').URL;
export default URL = axios.create({
  baseURL: 'https://api.github.com',
});
