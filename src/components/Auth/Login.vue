<template>
  <v-app id="inspire">
    <v-content>
      <v-container
          class="fill-height"
          fluid
      >
        <v-row
            align="center"
            justify="center"
        >
          <v-col
              cols="12"
              sm="8"
              md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                  color="primary"
                  dark
                  flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form
                    validation
                    v-model="valid"
                    ref="form"
                >
                  <v-text-field
                      label="Email"
                      name="email"
                      prepend-icon="mdi-person"
                      type="email"
                      v-model="email"
                      :rules="emailRules"
                  />

                  <v-text-field
                      label="Password"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      v-model="password"
                      :counter="6"
                      :rules="passwordRules"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn
                    color="primary"
                    @click="onSubmit"
                    :loading="loading"
                    :disabled="!valid || loading"
                >Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Нужно ввести пароль',
        v => v.length >= 6 || 'Пароль должен состоять мин из 6 символов',
      ]
    }
  },

  computed: {
    loading() {
      return this.$store.getters.loading
    }
  },

  methods: {
    onSubmit() {
      console.log('onSubmit')
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password,
        }

        this.$store.dispatch('loginUser', user)
            .then(() => {
              this.$router.push('/')
            })
            .catch() // e => console.log(e)

        console.log(user)
      }
    }
  },

  created() {
    if (this.$route.query['loginError']) {
      this.$store.dispatch('setError', 'Нужно зарегистрироваться, чтобы войти на страницу')
    }
  }
}
</script>