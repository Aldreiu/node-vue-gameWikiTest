import Vue from "vue";
import App from "./App.vue";

// 轮播图全局引用
import VueAwesomeSwiper from "vue-awesome-swiper";
// 轮播图样式
// import style
import "swiper/css/swiper.css";
// 加载 iconfont图标
import "./assets/iconfont/iconfont.css";

Vue.use(VueAwesomeSwiper /* { default options with global component } */);

// 加载my scss
import "./assets/scss/style.scss";
import router from "./router";

// 引入公共组件
import Card from "@/components/Card";
// 添加全局公共组件
Vue.component("m-card", Card);
import ListCard from "@/components/ListCard";
Vue.component("m-list-card", ListCard);

Vue.config.productionTip = false;

import axios from "axios";
Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api',
  // baseURL: "http://localhost:5000/web/api",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
