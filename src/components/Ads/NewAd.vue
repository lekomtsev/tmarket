<template>
    <v-container>
        <v-flex xs12 sm6 offset-sm3>
            <h1 class="mb-5">Создать новое объявление</h1>
            <v-form
                validation
                ref="form"
                v-model="valid"
                class="mb-3"
            >
                <v-text-field
                    label="Добавить заголовок"
                    name="title"
                    type="text"
                    v-model="title"
                    required
                    :rules="[v => !!v || 'Заголовок объязателен']"
                />

                <v-textarea
                    label="Описание"
                    name="description"
                    type="text"
                    v-model="description"
                    :rules="[v => !!v || 'Описание объязателен']"
                />
            </v-form>
            <v-row>
                <v-col>
                    <v-btn class="warning">
                        Upload
                        <v-icon right dark>mdi-cloud-upload</v-icon>
                    </v-btn>
                </v-col>
                <v-col>
                    <img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" height="100px" alt="alt">
                </v-col>
                <v-col md="12" sm="12">
                    <v-switch
                        label="Отобразить изображение в слайдере на главной?"
                        v-model="promo"
                    ></v-switch>
                </v-col>
            </v-row>
            <v-row :justify="'center'">
                <v-col cols="12" sm="6">
                    <v-btn
                        class="success"
                        width="100%"
                        @click="createAd"
                        :disabled="!valid"
                    >Отправить</v-btn>
                </v-col>
            </v-row>
        </v-flex>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },

    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          // logic
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo
          }

          console.log(ad)
        }
      }
    }
  }
</script>
