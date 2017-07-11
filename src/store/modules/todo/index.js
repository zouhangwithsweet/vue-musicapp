import actions from './actions';
import mutations from './mutations';
export default {
    state: {
        todoList: [],
        todoInfo: {
            id: 0,
            text: '',
            isDone: false
        },
        selected: 0
    },
    actions: actions,
    mutations: mutations,
    getters: {
        filterDoned: function (state) {
            let todoList = state.todoList.filter((item) => {
                if (item.isDone) {
                    return item;
                }
            });
            return todoList;
        },
        filterNoDone: function (state) {
            let todoList = state.todoList.filter((item) => {
                return item;
            });
            return todoList;
        }
    }
};
