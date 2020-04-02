import * as firebase from 'firebase'

class Ad {
  constructor (title, description, ownerId, imageSrc = '', promo = false, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.promo = promo
    this.id = id
  }
}

export default {
  state: {
    ads: []
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    },
    loadAds (state, payload) {
      state.ads = payload
    }
  },
  actions: {
    async createAd ({ commit, getters }, payload) {
      commit('clearError')
      commit('setLoading', true)

      console.log(payload, 'payload from createAd - ads.js')
      const image = payload.image
      
      try {
        const newAd = new Ad(
          payload.title,
          payload.description,
          getters.user.id,
          '',
          payload.promo
        )

        const ad = await firebase.database().ref('ads').push(newAd)
        const imageExt = image.name.slice(image.name.lastIndexOf('.'))

        const fileData = await firebase.storage().ref(`ads/${ad.key}.${imageExt}`).put(image)
        console.log(fileData)
        const imageSrc = await firebase.storage().ref().child(fileData.ref.fullPath).getDownloadURL()
        // const imageSrc = fileData.ref.getDownloadURL()
        // const imageSrc = fileData.ref.getDownloadURL()
        console.log(imageSrc, 'imageSrc - imageSrc')

        await firebase.database().ref('ads').child(ad.key).update({
          imageSrc: imageSrc
        })

        commit('setLoading', false)
        commit('createAd', {
          ...newAd,
          id: ad.key,
          imageSrc: imageSrc
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },

    async fetchAds ({ commit }) {
      commit('clearError')
      commit('setLoading', true)

      const resultAds = []

      try {
        const firebaseData = await firebase.database().ref('ads').once('value')
        const ads = firebaseData.val()

        Object.keys(ads).forEach((key) => {
          const ad = ads[key]
          resultAds.push(
            new Ad(ad.title, ad.description, ad.ownerId, ad.imageSrc, ad.promo, key)
          )
        })

        commit('loadAds', resultAds)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter((ad) => {
        return ad.promo === true // return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}