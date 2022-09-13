import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Account: IAccount = {
        namespaced: true,
        state: {
            profile: {
                avatar: 'https://sun9-west.userapi.com/sun9-37/s/v1/ig2/Ye99m5cau03zHl0ML3CPbwascm0oYTpRjwC2On35Mm_seuERWwpvyvii_T4s1SB5BizjpZIDoh8C9AiF2DNjdbMc.jpg?size=960x1280&quality=95&type=album',
                nickname: 'C L A S S I C',
                username: 'Roman Dmitriev',
                id: 'romkery',
                bio: 'Hello everyone, this is my vue portfolio application, based on pinterest',
                info: [
                    {
                        count: 5,
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
                    'https://sun9-west.userapi.com/sun9-70/s/v1/ig2/F18qh9aI_WrrLl2voofSUASRhDlSpTxBJBVCfh-hNVG-ze3RYEvs6dvsDkn7Zr8UmHNM6ofYEOphveRpFjWo0PBU.jpg?size=736x1308&quality=95&type=album',
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
            },
            Map: new Map(),
            tabs: [
                {
                    icon: 'el-icon-s-grid',
                    title: 'ПУБЛИКАЦИИ',
                    component: 'public',
                    isActive: true,
                },
                {
                    icon: 'el-icon-star-on',
                    title: 'СОХРАНЕННОЕ',
                    component: 'saved',
                    isActive: false,
                },
                {
                    icon: 'el-icon-user-solid',
                    title: 'ОТМЕТКИ',
                    component: 'marks',
                    isActive: false,
                }
            ],
            users: [
                {
                    avatar: 'https://sun9-west.userapi.com/sun9-37/s/v1/ig2/Ye99m5cau03zHl0ML3CPbwascm0oYTpRjwC2On35Mm_seuERWwpvyvii_T4s1SB5BizjpZIDoh8C9AiF2DNjdbMc.jpg?size=960x1280&quality=95&type=album',
                    nickname: 'C L A S S I C',
                    username: 'Roman Dmitriev',
                    id: 'romkery',
                    bio: 'Hello everyone, this is my vue portfolio application, based on pinterest',
                    info: [
                        {
                            count: 5,
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
                        'https://sun9-west.userapi.com/sun9-70/s/v1/ig2/F18qh9aI_WrrLl2voofSUASRhDlSpTxBJBVCfh-hNVG-ze3RYEvs6dvsDkn7Zr8UmHNM6ofYEOphveRpFjWo0PBU.jpg?size=736x1308&quality=95&type=album',
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
                },
                {
                    avatar: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/365e5edb-7b7f-415a-81c7-a848936e9e38.__CR0,0,300,300_PT0_SX300_V1___.jpg',
                    nickname: 'Morty',
                    username: 'Morty Smith',
                    id: 'morty',
                    bio: 'You know, parents are just kids having kids.',
                    info: [
                        {
                            count: 3,
                            title: 'публикаций',
                        },
                        {
                            count: 5,
                            title: 'подписчиков',
                        },
                        {
                            count: 10,
                            title: 'подписок',
                        }
                    ],
                    publications: [
                        'https://sun9-west.userapi.com/sun9-3/s/v1/ig2/Q8iYZqCMJWSX1KEZo1eRF_0lMEHKstRWOrFXMYNSms9f-_LR9xHvQSqARAMMZ1PboKuv8813XkLdjISznVMi7Psh.jpg?size=1241x1242&quality=96&type=album',
                        'https://sun9-west.userapi.com/sun9-4/s/v1/ig2/FKa-c1JwHwVT1UWBTyDBccBn4UuFxmhGuUUlfsDgTtF2Z_PTipc8oJ_qa6rpV6gcwLNv3loOl-19PXEgQ7b46_N5.jpg?size=938x1024&quality=96&type=album',
                        'https://slovnet.ru/wp-content/uploads/2018/09/25-34.jpg'
                    ],
                    saved: [
                        'https://sun4.userapi.com/sun4-10/s/v1/ig2/dEK_4-HQ5jSby6brsq8wXg3g_lDcZoqV08KjWqfwQp9n_jWcesOXYCMd8btkxrsrt6sYU1hawn9W0FNminTQvc24.jpg?size=1440x1920&quality=95&type=album',
                        'https://sun4.userapi.com/sun4-15/s/v1/ig2/kJ7OZbsobNzZXcpl-PMWqdrqWONuHXkN0qWTRgBs1EDLKKOJLdCqeEMV74NEoPBtbJ2FRWFgPR8R2pLLHfgRGK5S.jpg?size=1280x951&quality=95&type=album',
                        'https://sun4.userapi.com/sun4-16/s/v1/ig2/XWxdkAFHcqTB_E45nH1U0lHHrNkvcVWZ3uCDejqnLiYO2lzdEwkgSQo4G0GvLUUIS7aotyrXiotNwjNLLqTEhArA.jpg?size=1024x1280&quality=95&type=album',
                        'https://sun4.userapi.com/sun4-17/s/v1/ig2/3I-bOKNAjHqSsFZxMBxF7DKv_f3FpsfEIx0rUO01wxPdFRYh_X8zypk6NSjQeCj4BdUv27mObPnemmLmhC2LZ-tv.jpg?size=1080x1350&quality=95&type=album',
                    ],
                },
                {
                    avatar: 'https://avatars.githubusercontent.com/u/81356582?v=4',
                    nickname: 'Rick',
                    username: 'Rick Sanchez',
                    id: 'rick',
                    bio: 'To live is to risk everything. Otherwise, you\'re just a sluggish bunch of randomly assembled molecules drifting with the current of the universe.',
                    info: [
                        {
                            count: 5,
                            title: 'публикаций',
                        },
                        {
                            count: 180722,
                            title: 'подписчиков',
                        },
                        {
                            count: 1,
                            title: 'подписок',
                        }
                    ],
                    publications: [
                        'https://sun9-west.userapi.com/sun9-38/s/v1/ig2/kBDjBaa2Liy-p4GoQryK_CY54iU-1j6cC4lELgPxV0UItsj10KGwt9_64Zt13NibrBMEnHX2EQ9X59XhHfU0czlf.jpg?size=1600x1200&quality=95&type=album',
                        'https://sun4.userapi.com/sun4-11/s/v1/ig2/JYHGiHn-jadJD0gMKwR8Lg1i7rhqD10rE9vobX5vH1A9bZNhL-1kMed8peX0QmqdnjrOorpz8xU0gTbUEh0Ftjnp.jpg?size=960x540&quality=96&type=album',
                        'https://sun4.userapi.com/sun4-12/s/v1/ig2/6_KE_XZtcurBG_XZmu75A12NnST1AJtPrV5_h-kbMTRkChDrXk-oPzkd0z24cokwvliMq876ZtY86pEE84ypgwpn.jpg?size=1080x1080&quality=96&type=album',
                        'https://sun4.userapi.com/sun4-10/s/v1/ig2/ywZ1ksuks0YUffw5dYHHFQUXjXLL4hhkxQYuqd2vc4ftC-F2mASBhAa64h8EXxvSrpCaOKiTLGH8wvfzcfs5ps6Y.jpg?size=1080x1080&quality=96&type=album',
                        'https://sun9-west.userapi.com/sun9-38/s/v1/ig2/-bznceXtos8yNXHAWO7XSamI7rPHrb9RGpFajqVO0V5hOxBjCglKYmENjYCZskZ8-SmnjoYfqqtqqLDfDWt1sIGj.jpg?size=1527x2160&quality=96&type=album'
                    ],
                    saved: [
                        'https://www.worldbank.org/content/dam/photos/780x439/2022/jan-2/deep-blue-sea_shutterstock_1512728810.jpg',
                    ],
                }
            ]
        },
        getters: {}
        ,
        mutations: {
            SET_MAP: (state: IState) => {
                state.users.forEach((user: IProfile): void => {
                    state.Map.set(user.id, user);
                });
            },
            SET_PROFILE: (state: IState, id: string) => {
                state.profile = <IProfile>state.Map.get(id);
            }

        }
        ,
        actions: {
            setLoading({commit}, payload) {
                commit('SET_LOADING', payload);
            },

            setMap({commit}) {
                commit('SET_MAP');
            },

            setLiked({commit}, payload) {
                commit('SET_LIKE', payload);
            },

            setUserProfile: ({commit}, payload: string): void => {
                commit('SET_PROFILE', payload);
            }
        }
    }
;

interface IAccount {
    namespaced: boolean
    state: IState
    getters: any
    mutations: any
    actions: any
}

interface IState {
    profile: null | IProfile
    Map: Map<string, IProfile>
    users: IProfile[]
    tabs: ITabs[]
}

interface IProfile {
    avatar: string
    nickname: string
    username: string
    id: string
    bio: string
    info: IInfo[]
    publications: string[]
    saved: string[]
}

interface IInfo {
    count: number,
    title: string,
}

interface ITabs {
    icon: string,
    title: string,
    component: string,
    isActive: boolean,
}

export default Account;
