import * as types from './mutation_type';
export default {
    addTodo ({commit}, todoText) {
        commit(types.ADD_TODO, todoText);
    },
    doneTodo ({commit}, id) {
        commit(types.DONE_TODO, id);
    },
    selectType ({commit}, type) {
        commit(types.SELECT_TYPE, type)
    }
}