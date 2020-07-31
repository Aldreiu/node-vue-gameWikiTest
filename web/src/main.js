import Vue from "vue";
import App from "./App.vue";

// 轮播图全局引用
import VueAwesomeSwiper from "vue-awesome-swiper";
// 轮播图样式
// import style
import "swiper/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default options with global component } */);

// 加载my scss
import "./assets/scss/style.scss";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
