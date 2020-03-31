import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from './router'
import * as firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created () {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: 'AIzaSyBjd7Dwyx8c6rLQSQ10nbBh1JUpJQiLTls',
      authDomain: 'fir-4cc93.firebaseapp.com',
      databaseURL: 'https://fir-4cc93.firebaseio.com',
      projectId: 'fir-4cc93',
      storageBucket: 'fir-4cc93.appspot.com',
      messagingSenderId: '77592326687',
      appId: '1:77592326687:web:daee73b09fee53f1871b2a'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}).$mount('#app')
