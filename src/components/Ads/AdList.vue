<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-5">AdList</h1>

                <v-card
                    class="mb-3 overflow-hidden"
                    v-for="(ad, i) in ads"
                    :key="i"
                >
                    <div class="d-flex">
                        <v-avatar
                            size="150"
                            tile
                        >
                            <v-img class="overflow-hidden" :src="ad.imageSrc"></v-img>
                        </v-avatar>
                        <div class="d-flex flex-wrap pa-3">
                            <div>
                                <v-card-title
                                    class="headline"
                                    v-text="ad.title"
                                ></v-card-title>
                                <v-card-subtitle v-text="ad.description"></v-card-subtitle>
                            </div>
                            <v-btn
                                class="info ml-auto mt-auto"
                                :to="/ad/ + ad.id"
                            >Открыть</v-btn>
                        </div>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        ads: [
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
            promo: false,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            id: ''
          }
        ]
      }
    }
  }
</script>
