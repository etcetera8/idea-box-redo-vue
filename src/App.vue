
<template>
  <div id="app">
    <controller></controller>
    <router-view/>
  </div>
</template>

<script>
import Controller from '@/components/Controller'

export default {
  name: 'App',
  components: {'controller': Controller}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
