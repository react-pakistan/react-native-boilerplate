import axios from 'axios';
import { BASE_URL as baseURL, REQUEST_TYPES } from './endpoints';

export default (method = REQUEST_TYPES.GET, url : string) : Promise<any> => axios({
  method,
  baseURL,
  url,
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
})
  .then(({ data: resp }) => resp)
  .catch((error) => error);
