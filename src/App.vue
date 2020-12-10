<template>
  <div id="app">
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import TheHeader from './components/TheHeader'
export default {
  name: 'App',
  components: {
    TheHeader,
  },
  mounted() {
    if (!this.token) {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters(['token'])
  },
}
</script>
