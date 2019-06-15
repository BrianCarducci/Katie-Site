import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Bio from './components/Bio';
import Art from './components/Art';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {path: '/', component: Bio},
  {path: '/art', component: Art}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
