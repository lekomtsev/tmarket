<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <h1>Ad</h1>
                <v-card class="mb-3">

                    <v-img
                        height="300px"
                        src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"></v-img>

                    <v-card-title
                        class="headline text--primary"
                        v-text="'Заголовок'"
                    ></v-card-title>
                    <v-card-subtitle v-text="'Описание'"></v-card-subtitle>

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

  }
</script>
