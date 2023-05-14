<template>
  <Navigation />
  <div class="app-and-sidebar">
    <Sidebar />
    <MainApp />
  </div>
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
html {
  height: 100vh;
  width: 100vw
}

body {
  height: 100%;
  width: 100%;
}

#app {
  height: 100%;
  width: 100%;
  /* padding-top: 70px; */
  margin: 0;
}

.app-and-sidebar {
  height: calc(100% - 70px);
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-areas: "aside section";
}
</style>
