/**
 * Created by zou hang on 2017/7/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login';
import todo from './modules/todo/index';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        login: login,
        todo: todo
    }
});

