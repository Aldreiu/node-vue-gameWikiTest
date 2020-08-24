import axios from "axios";
import Vue from "vue";
import router from "./router"


const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/admin/api',
  // baseURL: "http://localhost:5000/admin/api",
});

http.interceptors.request.use(
  function(config) {
    console.log(localStorage.token);
    // 判断前端是否有token
    if(localStorage.token){
      config.headers.Authorization = 'Bearer '+(localStorage.token || '');
    }
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
      // element ui 的消息提示
      Vue.prototype.$message({
        type: "error",
        message: err.response.data.message,
      });
      console.log(err.response);
      if(err.response.status === 401){
        console.log("ik");
        console.log(router);
        router.push('/login')
        console.log("12312312 fuck");
      }
      // console.log(err.response.data.message);
      return Promise.reject(err);
    }
    }
    // 如果响应过来401说明要重新登陆
    
);

export default http;
