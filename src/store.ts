import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        route: 'modoo',
        routers: [
            {
                name: 'modoo',
                icon: 'mdi-adjust',
            },
            {
                name: 'hot',
                icon: 'mdi-fire',
            },
            {
                name: 'talk',
                icon: 'mdi-comment-text',
            },
            {
                name: 'profile',
                icon: 'mdi-account',
            },
        ],
    },
    mutations: {
        changePage(state, payload) {
            state.route = payload;
            return state.route;
        },
    },
    actions: {
        changePage(context, payload) {
            return context.commit('changePage', payload);
        },
    },
});
