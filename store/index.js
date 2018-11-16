import vue from 'vue'
import vuex from 'vuex'
import api from '../services/api';

vue.use(vuex)

const store = new Vuex.Store({
    state: {
        maps: [],
        genres: []
    },
    mutations: {
        addMap(state, map) {
            state.maps.push(map)
        }
    },
    actions: {
        getMaps({ state, commit }) {
            if (!state.maps.length) {
                api.getMaps()
                    .then(data => {
                        data.forEach(map => commit('addMap', map))
                    })
            }
        }
    }
})

export default store;