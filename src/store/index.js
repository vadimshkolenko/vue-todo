import Vue from 'vue'
import Vuex from 'vuex'
import account from '@/store/modules/account';
import tasks from '@/store/modules/tasks';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    account,
    tasks,
  }
})
