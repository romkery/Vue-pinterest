import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Account = {
    namespaced: true,
    state: {
        profile: {
            nickname: '_Whiteek_',
            username: 'White Wolf',
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
                'https://sun9-79.userapi.com/impg/c855132/v855132873/24cfe9/wjab-0mpLQ8.jpg?size=1620x2160&quality=96&sign=346b09311e4977abda6cdf6d735fa7d9&type=album',
                'https://sun9-22.userapi.com/impg/KB2qKZB9cEDR1eR8Ozkoyc2_ak1xiDzEN28eTQ/njaCVji__Qw.jpg?size=2075x2160&quality=95&sign=e202e9dd95e13b278c65528a634ce4b5&type=album',
                'https://sun9-82.userapi.com/impg/4l1AkljuiMyENr25q0xVFjEBfZTNJCNk42j4hQ/f6ofbpBOpdM.jpg?size=750x750&quality=95&sign=12c33c26d4715ac67ca80f77fcdb9f6c&type=album',
                'https://sun9-82.userapi.com/impg/4l1AkljuiMyENr25q0xVFjEBfZTNJCNk42j4hQ/f6ofbpBOpdM.jpg?size=750x750&quality=95&sign=12c33c26d4715ac67ca80f77fcdb9f6c&type=album'
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
                    img: require('@/assets/img/cell.svg'),
                    title: 'ПУБЛИКАЦИИ',
                    component: 'public',
                    isActive: true,
                },
                {
                    img: require('@/assets/img/saved.svg'),
                    title: 'СОХРАНЕННОЕ',
                    component: 'saved',
                    isActive: false,
                },
                {
                    img: require('@/assets/img/marks.svg'),
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