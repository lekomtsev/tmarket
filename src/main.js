import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from './router';

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
