<template>
  <v-app>
    <v-navigation-drawer app temporary></v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Blogger</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text >Link 1</v-btn>
        <v-btn text >Link 2</v-btn>
        <v-btn text >Link 3</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
};
</script>
