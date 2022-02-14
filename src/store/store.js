import Vue from 'vue';
import Vuex from 'vuex';
import MainContentStore from '@/store/modules/MainContent-store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        MainContentStore: MainContentStore
    }
});