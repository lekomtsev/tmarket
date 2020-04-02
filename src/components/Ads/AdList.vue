<template>
    <v-container>
        <v-layout v-if="!loading && myAds.length !== 0">
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-5">AdList</h1>

                <v-card
                    class="mb-3 overflow-hidden"
                    v-for="(ad, i) in myAds"
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
        <v-layout v-else-if="!loading && myAds.length === 0">
            <div style="height: 80vh" class="d-flex justify-center align-center">
                <p>У вас нет объявлений, для добавления нужно перейти во вкладку Добавить</p>
            </div>
        </v-layout>
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
    </v-container>
</template>

<script>
  export default {
    computed: {
      myAds () {
        return this.$store.getters.myAds
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>
