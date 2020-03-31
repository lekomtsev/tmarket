export default {
  state: {
    ads: [
      {
        title: '1 Title',
        description: 'description description',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '123'
      },
      {
        title: '2 Title',
        description: 'description description description',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: '1234'
      },
      {
        title: '1 Title',
        description: 'description description',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: ''
      },
      {
        title: '2 Title',
        description: 'description description description',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: ''
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({ commit }, payload) {
      payload.id = '2'
      commit('createAd', payload)
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