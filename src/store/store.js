import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        test: [
            1, 2, 3, 4
        ]
    },
    getters: {
        plus: function (state) {
            let test2 = state.test.map(
                test => {
                    return test * 2
                }
            );
            return test2
        }
    }
});
