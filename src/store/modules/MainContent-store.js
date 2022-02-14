import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const MainContentStore = {
    state: {
        count: 0,
        itemId: 19,
        layout: {
            layout1: [],
            layout2: [],
            layout3: [],
            layout4: [],
            layout5: [],
            layout6: [],
            layout7: []
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
    },
    mutations: {
        SET_LAYOUT: (state, payload) => {
            state.layout[payload.id].push(payload);
        },

        SET_COUNT: (state, payload) => {
            state.count = payload;
        },

        ADD_COUNT: (state, payload) => {
            state.count += payload;
        },

        SET_ITEM_ID: (state, payload) => {
            state.itemId += payload;
        },
    },
    actions: {
        GetLayout({commit, state}) {
            for (let i = 1; i < 8; i++) {
                if (state.count === 12) {
                    commit('SET_COUNT', 0);
                } else {
                    commit('ADD_COUNT', 2);
                }
                commit('SET_ITEM_ID', 1);
                commit('SET_LAYOUT', {
                        'x': state.count,
                        'y': state.layout.length + 1,
                        'w': 2,
                        'h': Math.floor(Math.random() * 10) + 3,
                        'i': state.itemId.toString(),
                        'id': 'layout' + i,
                        'mb': Math.floor(Math.random() * (100 - 70 + 1)) + 70,
                        'avatarSrc': 'https://source.unsplash.com/random/500x500/?people/' + Math.random(),
                        'pictureSrc': 'https://picsum.photos/1920/1080?random=' + Math.trunc(Math.random() * 1000)
                    },
                );
            }
        },
    }
};

export default MainContentStore;