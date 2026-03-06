import axios from 'axios';
import env from '@/utils/env';

const baseURL = env.apiBase || '/api';

const http = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'crossDomain': true,
    'Content-Type': 'application/json',
  },
});

// request interceptor
http.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  },
);

// response interceptor
http.interceptors.response.use(
  async (res) => {
    // 如果是 blob 類型，返回完整的 response（包含 headers）
    if (res.config.responseType === 'blob') {
      return res;
    }
    return res.data ? res.data : res;
  },
  (err) => {
    return Promise.reject(err.response ?? err);
  },
);

// typed wrappers -> 改為純 JS 函式 (移除泛型與型別斷言)
const get = (url, config) => http.get(url, config);
const post = (url, data, config) => http.post(url, data, config);
const put = (url, data, config) => http.put(url, data, config);
const patch = (url, data, config) => http.patch(url, data, config);
const del = (url, config) => http.delete(url, config);
const request = (config) => http.request(config);

// export helpers (保持與既有使用方式相容)
export default {
  get,
  post,
  put,
  patch,
  delete: del,
  request,
};
