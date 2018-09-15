<template>
  <div class="app-home">
    <div class="show">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'appHome',
  data () {
    return {
      msg: 'Welcome to home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
