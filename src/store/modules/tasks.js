import axios from 'axios';
import {MAIN_PATH} from "@/static";

export default {
  actions: {
    getAllTasks({commit}) {
      axios({url: `${MAIN_PATH}/task`})
        .then(response => {
          const data = response.data
          commit('getTasksSuccessful', data)
        })
        .catch(err => {
          commit('tasksActionError', err)
        })
    },
    addTask({commit}, description) {
      axios({url: `${MAIN_PATH}/task`, data: {description}, method: 'POST'})
        .then(response => {
          const data = response.data
          commit('addTaskSuccessful', data.data)
        })
        .catch(err => {
          commit('tasksActionError', err)
        })
    },
    deleteTask({commit}, id) {
      axios({url: `${MAIN_PATH}/task/${id}`, method: 'DELETE'})
        .then(() => {
          commit('removeTaskSuccessful', id)
        })
        .catch(err => {
          commit('tasksActionError', err)
        })
    },
  },
  mutations: {
    getTasksSuccessful(state, data) {
      state.tasks = data.data
      state.count = data.count
    },
    addTaskSuccessful(state, task) {
      state.tasks.push(task)
      state.count++
    },
    removeTaskSuccessful(state, id) {
      state.tasks = state.tasks.filter(task => task._id !== id)
    },
    tasksActionError(state, error) {
      state.error = error
    },
  },
  state: {
    tasks: null,
    count: null,
    error: null,
  },
  getters: {
    tasks(state) {
      return state.tasks
    },
    count(state) {
      return state.count
    }
  },
}
