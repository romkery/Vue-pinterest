import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Account = {
    namespaced: true,
    state: {
        profile: {
            nickname: 'C L A S S I C',
            username: 'Dmitriev Roman',
            bio: 'Hello everyone, this is my vue portfolio application, based on pinterest',
            info: [
                {
                    count: 4,
                    title: 'публикаций',
                },
                {
                    count: 153,
                    title: 'подписчиков',
                },
                {
                    count: 234,
                    title: 'подписок',
                }
            ],
            publications: [
                'https://sun4.userapi.com/sun4-16/s/v1/ig2/syDn78mL64pLXS5REFq5S8M3uFODRaR55tHe8LgsCB6bCkik7iZO5NyjOWMeBOeJ-WSZULNTk2VJ4rj04yQj8yiR.jpg?size=736x981&quality=96&type=album',
                'https://sun9-north.userapi.com/sun9-86/s/v1/ig2/0Gr3HSpBst8AsCGTkyu3ZPBfO7i0wtXIywg-U3p501RCO6EDxp0mh6OHSDI-zUAtZ3i8vyScV2IJ8Ng8l_ckWFgo.jpg?size=720x720&quality=96&type=album',
                'https://sun4.userapi.com/sun4-10/s/v1/ig2/suVCvFx14Ko6LhgxnOT3Yqg43w7Wzg-RDVn7Co9YixdytsQ_A96jXZ2_l1b7RMmw6EaOFvtyo2hNfJ7S2TRjwqZo.jpg?size=736x1023&quality=96&type=album',
                'https://sun9-west.userapi.com/sun9-70/s/v1/ig2/F18qh9aI_WrrLl2voofSUASRhDlSpTxBJBVCfh-hNVG-ze3RYEvs6dvsDkn7Zr8UmHNM6ofYEOphveRpFjWo0PBU.jpg?size=736x1308&quality=95&type=album'
            ],
            saved: [
                'https://i.pinimg.com/564x/64/53/12/64531252c5c41fe27b34cfbe864a9ced.jpg',
                'https://i.pinimg.com/564x/12/70/e4/1270e48a6aa57576d9654bcd9e011834.jpg',
                'https://i.pinimg.com/236x/70/cc/f6/70ccf6af19f99bbb2eee7d0c444bec13.jpg',
                'https://i.pinimg.com/564x/4e/46/40/4e4640ac87eb3a0b73fb38d312a18fcb.jpg',
                'https://i.pinimg.com/236x/31/ba/79/31ba795f6d6fb7bd6fb3e13036d6fb61.jpg',
                'https://i.pinimg.com/236x/24/97/a4/2497a4b66ccc21df61f8d3af85c8f902.jpg',
                'https://i.pinimg.com/236x/1b/d8/2b/1bd82b94ec7417cad5c2b234806b8d59.jpg',
                'https://i.pinimg.com/236x/dc/0c/42/dc0c42c7d90c95270aea0dd9ab530ec7.jpg',
                'https://i.pinimg.com/236x/50/45/e1/5045e1ad038931c04bf8e22e9da59791.jpg',
                'https://i.pinimg.com/236x/97/af/64/97af64479bc3357acf2c7dc105e8bd61.jpg',
            ],
            tabs: [
                {
                    img: '../../../assets/img/cell.svg',
                    title: 'ПУБЛИКАЦИИ',
                    component: 'public',
                    isActive: true,
                },
                {
                    img: '../../assets/img/saved.svg',
                    title: 'СОХРАНЕННОЕ',
                    component: 'saved',
                    isActive: false,
                },
                {
                    img: '../../assets/img/marks.svg',
                    title: 'ОТМЕТКИ',
                    component: 'marks',
                    isActive: false,
                }
            ],

        }
    },
    getters: {},
    mutations: {},
    actions: {
        setLoading({commit}, payload) {
            commit('SET_LOADING', payload);
        },

        setLiked({commit}, payload) {
            commit('SET_LIKE', payload);
        }
    }
};

export default Account;
