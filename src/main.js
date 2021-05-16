// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import  store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios,axios)


//登录拦截功能
router.beforeEach(((to, from, next) => {
  let islogin = window.sessionStorage.getItem("islogin");
  if(to.path == '/logout'){
    window.sessionStorage.clear();
    next('/login/login');
  }else if(to.path == '/login/login'){
    if(islogin != null){
      next('/day03/handlercenter');
    }
  }else if(islogin == null){
     next('/login/login');
  }
  next();
}));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})

