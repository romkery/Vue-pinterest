import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const MainContentStore = {
    namespaced: true,
    state: {
        isPopUp: false,
        popSrc: '',
        isLoading: false,
        count: 0,
        itemId: 19,
        query: 'car',
        layout: {
            layout1: null,
            layout2: null,
            layout3: null,
            layout4: null,
            layout5: null,
            layout6: null,
            layout7: null
        },
        usernames: ['Matix', 'Lillyanna', 'Arianah', 'Jaeger', 'Kemarion', 'Janya', 'Kinzley',
            'Shloime', 'Arham', 'Lyon', 'Lakelynn', 'Everette', 'Eugene', 'Jacobi', 'Klayton',
            'Issa', 'Kelly', 'Adyson', 'Jazmyn', 'Zaydee',
        ],
        pictureNames: [
            'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetuer',
            'adipiscing', 'elit', 'Aenean', 'commodo'
        ],
    },
    getters: {
        getLayoutElements(state) {
            return state.layout;
        },
        getUsernames(state) {
            return state.usernames;
        },
        getPictureNames(state) {
            return state.pictureNames;
        },
        getIsLoading(state) {
            return state.isLoading;
        },
        getIsLiked(state) {
            return state.isLiked;
        },
    },
    mutations: {
        SET_LAYOUT: (state, payload) => {
            state.layout[payload.id].push(payload);
        },

        DELETE_LAYOUT: (state, payload) => {
            state.layout[payload.name] = null;
        },

        SET_COUNT: (state, payload) => {
            state.count = payload;
        },

        SET_POPUP: (state, payload) => {
            state.isPopUp = payload.isPopUp;
        },

        SET_POP: (state, payload) => {
            state.popSrc = payload.popSrc;
        },

        ADD_COUNT: (state, payload) => {
            state.count += payload;
        },

        SET_ITEM_ID: (state, payload) => {
            state.itemId += payload;
        },

        SET_QUERY: (state, payload) => {
            state.query = payload;
        },

        SET_LOADING: (state, payload) => {
            state.isLoading = payload;
        },

        SET_LIKED: (state, payload) => {
            state.isLiked = payload;
        },

        CREATE_MASSIVE: (state, payload) => {
            state.layout[payload] = [];
        },
    },
    actions: {
        GetLayout({commit, state}) {
            let count = 0; // id картинки (чтобы не повторялась)

            for (let i = 1; i < 8; i++) {
                commit('CREATE_MASSIVE', 'layout' + i);
            }
            for (let i = 0; i < 10; i++) {

                for (let i = 1; i < 8; i++) {

                    count++;

                    if (state.count === 12) {
                        commit('SET_COUNT', 0);
                    } else {
                        commit('ADD_COUNT', 2);
                    }

                    let marginCount = Math.floor(Math.random() * (100 - 100 + 1)) + 100;
                    let heightCount = (Math.floor(Math.random() * 10) + 5) * 60;
                    commit('SET_ITEM_ID', 1);
                    commit('SET_LAYOUT', {
                            'x': state.count,
                            'y': state.layout.length + 1,
                            'w': 240,
                            'h': heightCount,
                            'i': state.itemId.toString(),
                            'id': 'layout' + i,
                            'mb': marginCount,
                            'isLiked': false,
                            'avatarSrc': `https://loremflickr.com/100/100/people?lock=${Math.trunc(Math.random() * 1000)}`,
                            'pictureSrc': `https://loremflickr.com/500/500/${state.query}?lock=${Math.floor(Math.random() * (100 - 1000 + 2)) + 1000}`,
                        },
                    );
                }
            }
        },

        removeLayout({commit, state}, payload) {
            state.layout = {
                layout1: null,
                layout2: null,
                layout3: null,
                layout4: null,
                layout5: null,
                layout6: null,
                layout7: null
            };
        },

        setUserQuery({commit}, payload) {
            commit('SET_QUERY', payload);
            for (let i = 1; i < 8; i++) {
                commit('DELETE_LAYOUT', {name: 'layout' + i});
            }
        },

        setLoading({commit}, payload) {
            commit('SET_LOADING', payload);
        },

        setLiked({commit}, payload) {
            commit('SET_LIKE', payload);
        },

        setPopUp({commit}, payload) {
            commit('SET_POPUP', payload);
            commit('SET_POP', payload);
        },
    }
};

export default MainContentStore;
