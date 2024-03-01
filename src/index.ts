import axios, { AxiosRequestConfig } from 'axios';

/**
 * An HTTP client is implemented from the Axios package.
 *
 * @param {string} url A url from a network.
 * @param {object} options Options to config request.
 * See more option here: https://github.com/axios/axios
 */
const request = (url = '', options: AxiosRequestConfig = {}) => {
  const {
    method = 'get', responseType = 'json', data = {}, ...config
  } = options;
  return axios({
    method,
    url,
    responseType,
    data,
    ...config,
  });
};

export { request };
