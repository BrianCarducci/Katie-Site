import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home';
import About from './components/About';
import Paintings from './components/Paintings';
import Ceramics from './components/Ceramics';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/paintings', component: Paintings},
  {path: '/ceramics', component: Ceramics}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

const config = {
  storageBucket: 'gs://katie-app.appspot.com'
};

// firebase.initializeApp(config);
// var storageRef = firebase.storage().ref();
// var paintingsRef = storageRef.child('paintings/acrylic-painting-techniques-1.jpg');
// var sculpturesRef = storageRef.child('sculptures');
// console.log(paintingsRef);

// console.log(firebase.storage());

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
