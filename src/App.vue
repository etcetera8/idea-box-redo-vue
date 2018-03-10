
<template>
  <div id="app">
    <controller></controller>
    <idea-list v-bind:ideas="ideas"></idea-list>
  </div>
</template>

<script>
import Controller from '@/components/Controller'
import IdeaList from '@/components/IdeaList'
export default {
  name: 'App',
  components: {
    'controller': Controller,
    'idea-list': IdeaList
    },

  data() {
    return {
      ideas: [
        {
          title: 'one',
          idea: 'Do things'
        },
        {
          title: 'two',
          idea: 'do more things'
        }
      ]
    }
  }
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
