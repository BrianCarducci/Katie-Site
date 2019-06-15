<template>
  <div id="app">
    <div class="container">
      <Header/>
      <router-view></router-view>
    </div>
    <img :src="src">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Bio from './components/Bio.vue'
import Art from './components/Art.vue'

const config = {
  storageBucket: 'gs://katie-app.appspot.com'
};

firebase.initializeApp(config);
var storageRef = firebase.storage().ref();
var paintingsRef = storageRef.child('Paintings/acrylic-painting-techniques-1.jpg');


export default {
  name: 'app',
  components: {
    Header,
    Bio,
    Art
  },
  data() {
    return {
      src: ''
    }
  },
  mounted() {
    paintingsRef.getDownloadURL()
      .then((url) => {
        this.src = url;
        console.log(this.src);
      })
      .catch((err) => console.log(err));
      console.log(this.src);
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
}
</style>
