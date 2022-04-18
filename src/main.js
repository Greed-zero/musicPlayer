import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from "vue-router";
//引入 iconfont
import "./assets/iconfont/iconfont.js";
import router from "@/router";

import store from './store/index'

//全局注册组件
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
