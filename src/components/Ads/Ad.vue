<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <h1 class="mb-3">Добавление</h1>
                <v-card class="mb-3" v-if="!loading">
                    <v-img
                        height="300px"
                        :src="ad.imageSrc"></v-img>

                    <v-card-title
                        class="headline text--primary"
                        v-text="ad.title"
                    ></v-card-title>
                    <v-card-subtitle v-text="ad.description"></v-card-subtitle>

                    <v-card-actions class="justify-end">
                        <app-edit-ad-modal
                            :ad="ad"
                            v-if="isOwner"
                        ></app-edit-ad-modal>
                        <v-btn
                            class="success ml-3"
                        >Купить</v-btn>
                    </v-card-actions>
                </v-card>
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
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import AppEditAdModal from './EditAdModal'

export default {
  components: {
    AppEditAdModal
  },

  props: ['id'],

  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    },
    loading () {
      return this.$store.getters.loading
    },
    isOwner () {
      return this.ad.ownerId === this.$store.getters.user.id
    }
  }
}
</script>
