import VueRouter from 'vue-router'
import authGuard from './auth-guard'
import Home from '../components/Home'
import Ad from '../components/Ads/Ad'
import AdList from '../components/Ads/AdList'
import NewAd from '../components/Ads/NewAd'
import Login from '../components/Auth/Login'
import Registration from '../components/Auth/Registration'
import Orders from '../components/User/Orders'
import NotFoundComponent from '../components/NotFoundComponent'

export default new VueRouter ({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ad/:id',
      name: 'ad',
      props: true,
      component: Ad
    },
    {
      path: '/list',
      name: 'list',
      component: AdList,
      beforeEnter: authGuard
    },
    {
      path: '/new',
      name: 'newAd',
      component: NewAd,
      beforeEnter: authGuard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'reg',
      component: Registration
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      beforeEnter: authGuard
    },
    {
      path: '*',
      name: '404',
      component: NotFoundComponent
    }
  ],
  mode: 'history'
})
