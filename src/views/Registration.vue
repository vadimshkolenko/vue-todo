<template>
  <div>
    <h2>регистрация</h2>
    <div>
      <label>
        Имя
        <input type="text" v-model="name">
      </label>
      <label>
        Почта
        <input type="text" v-model="email">
      </label>
      <label>
        Пароль
        <input type="text" v-model="password">
      </label>
      <label>
        Возраст
        <input type="text" v-model="age">
      </label>
      <button @click="sendRequest">Зарегаться</button>
    </div>
    <p>Уже есть аккаунт? <router-link to="/login">Войти</router-link></p>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'Registration',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      age: '',
    }
  },
  methods: {
    ...mapActions(['getAccount']),
    sendRequest() {
      this.getAccount({
        params: {
          name: this.name,
          email: this.email,
          password: this.password,
          age: this.age,
        },
        type: 'register',
      }).then(() => {
        this.$router.push('/')
        this.clearForm()
      })
    },
    clearForm() {
      this.name = ''
      this.email = ''
      this.password = ''
      this.age = ''
    },
  },
}
</script>
