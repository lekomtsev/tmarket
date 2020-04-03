import * as firebase from 'firebase';

class Order {
  constructor (name, phone, adId, done = false, id = null) {
    this.name = name,
    this.phone = phone,
    this.adId = adId,
    this.done = done,
    this.id = id
  }
}

export default {
  state: {
    orders: []
  },
  mutations: {
    loadOrders (state, payload) {
      state.orders = payload
    }
  },
  actions: {
    async createOrder ({ commit }, { name, phone, adId, ownerId }) {
      const order = new Order(name, phone, adId)
      commit('clearError')

      try {
        await firebase.database().ref(`/users/${ownerId}/orders`).push(order)
      } catch (error) {
        commit('setError', error.message)
        throw error
      }
    },
    async fetchOrders ({ commit, getters }) {
      commit('setLoading', true)
      commit('clearError')

      const resultOrders = []

      try {
        const firebaseDataUsers = await firebase.database().ref(`/users/${getters.user.id}/orders`).once('value')
        const orders = firebaseDataUsers.val()

        console.log(orders)

        Object.keys(orders).forEach((key) => {
          const ord = orders[key]
          resultOrders.push(
            new Order(ord.name, ord.phone, ord.adId, ord.done)
          )
        })
        console.log(resultOrders, '<--- resultOrders')

        commit('loadOrders', resultOrders)
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async markOrderDone({ commit, getters }, payload) {
      commit('clearError')

      console.log(getters.user.id)
      console.log(payload)

      try {
        await firebase.database().ref(`/users/${getters.user.id}/orders`).child(payload).update({
          done: true
        })
      } catch (error) {
        commit('setError', error.message)
        throw error
      }
    }
  },
  getters: {
    doneOrders (state) {
      return state.orders.filter(o => o.done)
    },
    undoneOrders (state) {
      return state.orders.filter(o => !o.done)
    },
    orders (state, getters) {
      return getters.undoneOrders.concat(getters.doneOrders)
    }
  }
}