import Vue from 'vue';
import App from './App.vue';
import './styles/index.scss';
import store from '@/store/store';
import router from './router/router';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App), store, router
}).$mount('#app');


