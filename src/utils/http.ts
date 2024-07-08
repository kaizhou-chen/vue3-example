import axios from 'axios';

// 创建axios实例
const http = axios.create({
  timeout: 1000 * 12
});

// post请求，设置默认请求头为: application/json
http.defaults.headers.post['Content-Type'] = 'application/json';

export default http;