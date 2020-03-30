<template>
    <div>
        <v-container fluid pt-0>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel :touchless="false">
                        <v-carousel-item
                            v-for="(ad, i) in ads"
                            :key="i"
                            :src="ad.imageSrc"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                        >
                            <div class="slider-link">
                                <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
                            </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container>
            <v-row>
                <v-col
                    v-for="(ad, i) in ads"
                    :key="i"
                    md="4"
                    sm="6"
                >
                    <v-card
                        class="mx-auto"
                        max-width="400"
                    >
                        <v-img
                            class="white--text align-end"
                            height="200px"
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        >
                            <v-card-title>Top 10 Australian beaches</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

                        <v-card-text class="text--primary">
                            <div>Whitehaven Beach</div>

                            <div>Whitsunday Island, Whitsunday Islands</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text :to="'/ad/' + ad.id" >Open</v-btn>
                            <v-btn class="primary" :to="'/ad/' + ad.id" >Купить</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        ads: [
          {
            title: '1 Title',
            description: '',
            promo: false,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            id: ''
          },
          {
            title: '2 Title',
            description: '',
            promo: false,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            id: ''
          },
          {
            title: '3 Title',
            description: '',
            promo: false,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            id: ''
          },
          {
            title: '4 Title',
            description: '',
            promo: false,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            id: ''
          }
        ]
      }
    },
  }
</script>

<style scoped lang="scss">
.slider-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px;
    background: rgba(23, 23, 23, 0.5);
    border-radius: 5px 5px 0 0;
}
</style>