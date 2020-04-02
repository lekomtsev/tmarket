<template>
    <v-dialog
            width="400px"
            v-model="modal"
    >
        <template v-slot:activator="{ on }">
            <v-btn
                class="primary"
                v-on='on'
            >Купить</v-btn>
        </template>

        <v-card>
            <v-container>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-title>
                            <h2 class="text--primary">Вы хотите купить этот товар?</h2>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-text>
                            <v-text-field
                                label="Ваше имя"
                                name="name"
                                type="text"
                                v-model="name"
                            />
                            <v-text-field
                                label="Телефон"
                                name="phone"
                                type="text"
                                v-model="phone"
                            />
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                @click="onCancel"
                                :disabled="localLoading"
                            >Закрыть</v-btn>
                            <v-btn
                                class="success"
                                text
                                @click="onSave"
                                :disabled="localLoading"
                                :loading="localLoading"
                            >Купить</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
    props: ['ad'],

    data () {
      return {
        modal: false,
        name: '',
        phone: '',
        localLoading: false
      }
    },

    methods: {
      onCancel () {
        this.name = ''
        this.phone = ''
        this.modal = false
      },

      onSave () {
        if (this.name !== '' && this.phone !== '') {
          this.localLoading = true

          this.$store.dispatch('createOrder', {
            name: this.name,
            phone: this.phone,
            adId: this.ad.id,
            ownerId: this.ad.ownerId
          })
          .finally(() => {
            this.name = ''
            this.phone = ''
            this.localLoading = false
            this.modal = false
          })
        }
      }
    }
  }
</script>
