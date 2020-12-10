<template>
  <div>
    <input type="text" v-model="description">
    <button @click="sendRequest">Добавить</button>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'AddTaskForm',
  data() {
    return {
      description: '',
    }
  },
  methods: {
    ...mapActions(['addTask']),
    sendRequest() {
      this.addTask(this.description)
      this.description = ''
    },
  },
}
</script>
