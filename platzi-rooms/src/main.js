import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyDg0EXtLvGAEdjfcqPRvp5KdyId5OlONRE',
  authDomain: 'platzi-rooms-ffc9c.firebaseapp.com',
  databaseURL: 'https://platzi-rooms-ffc9c.firebaseio.com',
  projectId: 'platzi-rooms-ffc9c',
  storageBucket: '',
  messagingSenderId: '238149938241',
  appId: '1:238149938241:web:09c70f076f40282b',
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('FETCH_AUTH_USER');
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    if (store.state.authId) {
      store.dispatch('FETCH_USER', { id: store.state.authId });
    }
  },
}).$mount('#app');
