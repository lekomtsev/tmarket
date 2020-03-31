export default {
  state: {
    ads: [
      {
        title: '1 Title',
        description: 'description description',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: ''
      },
      {
        title: '2 Title',
        description: 'description description description',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: ''
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
  mutations: {},
  actions: {},
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
    }
  }
}