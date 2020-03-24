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
          v-for="(sideBarLink, index) in sideBarLinks"
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
      </v-list-item-group>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon
        @click="toggleSidebar = !toggleSidebar"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Blogger</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">

        <v-btn
          text
          v-for="(sideBarLink, index) in sideBarLinks"
          :key="index"
          :to="sideBarLink.url"
        >
          <v-icon right>{{ sideBarLink.icon }}</v-icon>
          {{ sideBarLink.title }}
        </v-btn>

      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <!--router-view></router-view-->
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import RouterView from './components/HelloWorld';

export default {
  name: 'App',

  components: {},

  data: () => ({
    toggleSidebar: false,
    sideBarLinks: [
      { title: 'Login', icon: 'mdi-lock', url: '/login' },
      { title: 'Registration', icon: 'mdi-face', url: '/registration' },
      { title: 'Orders', icon: 'mdi-bookmark_order', url: '/orders' },
      { title: 'New ad', icon: 'mdi-note_add', url: '/new' },
      { title: 'My ads', icon: 'mdi-list', url: '/list' }
    ]
  }),
};
</script>
