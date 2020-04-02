<template>
    <div v-if="!loading">
        <v-container fluid pt-0>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel :touchless="false">
                        <v-carousel-item
                            v-for="(ad, i) in promoAds"
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
                        class="mx-auto card d-flex flex-wrap"
                        max-width="400"
                    >
                        <v-img
                            class="white--text align-end"
                            height="200px"
                            :src="ad.imageSrc"
                        >
                        </v-img>
                        <v-card-title>{{ ad.title }}</v-card-title>
                        <v-card-subtitle class="pb-0 text--primary">{{ ad.description }}</v-card-subtitle>
                        <v-card-actions class="mt-auto">
                            <v-spacer></v-spacer>
                            <v-btn text :to="'/ad/' + ad.id" >Open</v-btn>
                            <v-btn class="primary" :to="'/ad/' + ad.id" >Купить</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <div v-else>
        <v-container>
            <div style="height: 80vh" class="d-flex justify-center align-center">
                <v-progress-circular
                    indeterminate
                    :size="90"
                    :width="3"
                    color="purple"
                ></v-progress-circular>
            </div>
        </v-container>
    </div>
</template>

<script>
  export default {
    computed: {
      promoAds () {
        return this.$store.getters.promoAds
      },
      ads () {
        return this.$store.getters.ads
      },
      loading () {
        return this.$store.getters.loading
      }
    }
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

.card {
    height: 376px;
    overflow: hidden;
}
</style>