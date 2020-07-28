import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

import http from './http'

Vue.config.productionTip = false

Vue.prototype.$http = http

// 添加一个混合 mixin处理 上传的 Authorization
Vue.mixin({
  // 没使用data的原因可能会出现 不能及时更新和刷新

  // 上传图片的action 地址
  computed:{
    uploadUrl(){
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAutorizationHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')