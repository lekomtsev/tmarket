<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <h1 class="mb-3">Добавление</h1>
                <v-card class="mb-3">
                    <v-img
                        height="300px"
                        :src="ad.imageSrc"></v-img>

                    <v-card-title
                        class="headline text--primary"
                        v-text="ad.title"
                    ></v-card-title>
                    <v-card-subtitle v-text="ad.description"></v-card-subtitle>

                    <v-card-actions class="justify-end">
                        <v-btn
                            class="warning"
                        >Редактировать</v-btn>
                        <v-btn
                            class="success"
                        >Купить</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      ad () {
        const id = this.id
        return this.$store.getters.adById(id)
      }
    }
  }
</script>
