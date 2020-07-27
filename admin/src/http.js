import axios from "axios";
import Vue from "vue";

const http = axios.create({
  baseURL: "http://localhost:5000/admin/api",
});

http.interceptors.request.use(
  function(config) {
    console.log(localStorage.token);
    config.headers.Authorization = 'Bearer '+localStorage.token;
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.data.message) {
      Vue.prototype.$message({
        type: "error",
        message: err.response.data.message,
      });
    }
    // console.log(err.response.data.message);
    return Promise.reject(err);
  }
);

export default http;
