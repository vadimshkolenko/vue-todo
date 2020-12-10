<template>
  <div>
    <h2>Вход</h2>
    <div>
      <label>
        Почта
        <input type="text" v-model="email">
      </label>
      <label>
        Пароль
        <input type="text" v-model="password">
      </label>
      <button @click="sendRequest">Войти</button>
    </div>
    <p>Еще нет аккаунта? <router-link to="/registration">Зарегистироваться</router-link></p>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions(['getAccount']),
    sendRequest() {
      this.getAccount({
        params: {
          email: this.email,
          password: this.password,
        },
        type: 'login',
      }).then(() => {
        this.$router.push('/')
        this.clearForm()
      })
    },
    clearForm() {
      this.email = ''
      this.password = ''
    },
  },
}
</script>
