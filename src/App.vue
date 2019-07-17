<template>
  <div id="app">
      <Header/>
      <router-view :firebase="firebase"></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Paintings from './components/Paintings.vue'
import Ceramics from './components/Ceramics.vue'
import { compileFunction } from 'vm';

const config = {
  storageBucket: 'gs://katie-app.appspot.com'
};

firebase.initializeApp(config);


export default {
  name: 'app',
  components: {
    Header,
    Home,
    Paintings,
    Ceramics,
    About,
  },
  data() {
    return {
      src: '',
      firebase: firebase
    }
  },
  mounted() {
    
  }
}
</script>

<style>
html {
  overflow-y: scroll;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
