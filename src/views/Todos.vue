<template>
  <div>
    <h2>список дел</h2>
    <p>Дел: {{count}}</p>
    <add-task-form></add-task-form>
    <ul v-if="tasks && tasks.length">
      <li v-for="task in tasks" :key="task._id">
        {{task.description}}
        <button @click="deleteTask(task._id)">Удалить</button>
      </li>
    </ul>
    <p v-else-if="tasks">Нет задач</p>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import AddTaskForm from "@/views/AddTaskForm";
export default {
  name: 'Todos',
  components: {
    AddTaskForm,
  },
  methods: {
    ...mapActions(['getAllTasks', 'deleteTask']),
  },
  computed: {
    ...mapGetters(['count', 'tasks']),
  },
  mounted() {
    this.getAllTasks()
  }
}
</script>
