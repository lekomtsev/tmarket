<template>
    <v-container>
        <v-flex xs12 sm6 offset-sm3>
            <h1 class="text--secondary mb-5">Создать новое объявление</h1>
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
                    <v-btn
                        class="warning"
                        @click="triggerUpload"
                    >
                        Загрузить
                        <v-icon right dark>mdi-cloud-upload</v-icon>
                    </v-btn>
                    <input
                        type="file"
                        ref="fileInput"
                        class="d-none"
                        accept="image/*"
                        @change="onFileChange"
                    >
                </v-col>
                <v-col>
                    <img
                         v-if="imageSrc"
                         :src="imageSrc"
                         height="100px"
                         alt="alt">
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
                        :loading="loading"
                        :disabled="!valid || !image || loading"
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
        valid: false,
        image: null,
        imageSrc: ''
      }
    },

    computed: {
      loading() {
        return this.$store.getters.loading
      }
    },

    methods: {
      createAd () {
        if (this.$refs.form.validate() && this.image) {
          // logic
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            image: this.image
          }

          this.$store.dispatch('createAd', ad)
            .then(() => {
              this.$router.push('/list')
            })
            .catch(() => {})
        }
      },

      triggerUpload () {
        this.$refs.fileInput.click()
      },

      onFileChange (evt) {
        console.log(evt)
        const file = evt.target.files[0]
        const reader = new FileReader()
        reader.onload = () => {
            this.imageSrc = reader.result
        }
        reader.readAsDataURL(file)
        this.image = file
      }
    }
  }
</script>
