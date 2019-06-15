<template>
  <div id="app">
    <div class="container">
      <Header/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Bio from './components/Bio.vue'
import Art from './components/Art.vue'

export default {
  name: 'app',
  components: {
    Header,
    Bio,
    Art
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
