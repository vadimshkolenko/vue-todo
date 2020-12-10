<template>
  <header>
    <h1>Todo App</h1>
    <button v-if="token" @click="sendRequest">Выйти</button>
  </header>
</template>
<script>
import {mapGetters, mapActions} from "vuex";
export default {
  name: 'TheHeader',
  computed: {
    ...mapGetters(['token'])
  },
  methods: {
    ...mapActions(['logout']),
    sendRequest() {
      this.logout(this.token).then(() => this.$router.push('/login'))
    },
  },
}
</script>
