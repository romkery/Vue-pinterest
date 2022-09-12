import Vue from 'vue';
import vuex from 'vuex';
import MainContentStore from '@/store/modules/MainContent-store';
import AccountStore from '@/store/modules/Account-store.ts';

Vue.use(vuex);

export default new vuex.Store({
    modules: {
        AccountModule: AccountStore,
        MainModule: MainContentStore,
    }
});
