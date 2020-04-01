<template>
  <v-app>
    <v-navigation-drawer
      app
      temporary
      v-model="toggleSidebar"
    >
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group>
        <v-list-item
          v-for="(sideBarLink, index) in links"
          :key="index"
          :to="sideBarLink.url"
        >
          <v-list-item-icon>
            <v-icon v-text="sideBarLink.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="sideBarLink.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-if="isUserLoggedIn"
          @click="onLogout"
        >
          <v-list-item-icon>
            <v-icon v-text="'mdi-exit-to-app'"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="'Выход'"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="toggleSidebar = !toggleSidebar"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="logo">Blogger</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          v-for="(navBarLink, index) in links"
          :key="index"
          :to="navBarLink.url"
        >
          <v-icon left>{{ navBarLink.icon }}</v-icon>
          {{ navBarLink.title }}
        </v-btn>
        <v-btn
          text
          @click="onLogout"
          v-if="isUserLoggedIn"
        >
          <v-icon dark left>mdi-exit-to-app</v-icon>
          Выход
        </v-btn>

      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <template v-if="error">
      <v-snackbar
        :timout="5000"
        color="error"
        :top="true"
        @input="closeError"
        :value="true"
      >
        {{ error }}
        <v-btn dark text @click="closeError">Закрыть</v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {},

  data: () => ({
    toggleSidebar: false
  }),

  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
          { title: 'Orders', icon: 'mdi-bookmark', url: '/orders' },
          { title: 'New ad', icon: 'mdi-note-text', url: '/new' },
          { title: 'My ads', icon: 'mdi-view-list', url: '/list' }
        ]
      }

      return [
        { title: 'Login', icon: 'mdi-lock', url: '/login' },
        { title: 'Registration', icon: 'mdi-face', url: '/registration' },
      ]
    }
  },

  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
};
</script>

<style lang="scss" scoped>
  .logo {
    cursor: pointer;
  }
</style>