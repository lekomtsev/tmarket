import store from '../store/index'

export default function (to, from, next) {
  console.log(store)
  if (store.getters.user) {
    next()
  } else {
    next('/login?loginError=true')
  }
}