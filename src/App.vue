<template>
  <Navigation />
  <Sidebar />
  <MainApp />
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import Sidebar from '@/components/Sidebar.vue'
import MainApp from '@/components/MainApp.vue'

export default {
  name: 'App',

  components: {
    Navigation,
    Sidebar,
    MainApp
  }
}
</script>

<style>
#app {
  padding-top: 70px;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-areas: "aside section";
}
</style>
