<template>
  <div id="app">
    <top-header></top-header>
    <controller v-bind:add-idea="addIdea"></controller>
    <idea-list v-on:remove-idea="removeIdea" v-bind:ideas="ideas"></idea-list>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader'
import Controller from '@/components/Controller'
import IdeaList from '@/components/IdeaList'
export default {
  name: 'App',
  components: {
    'controller': Controller,
    'idea-list': IdeaList,
    'top-header': TopHeader
  },

  data () {
    return {
      ideas: [
        {
          title: 'one',
          idea: 'Do things',
          status: 'fresh'
        },
        {
          title: 'two',
          idea: 'do more things',
          status: 'fresh'
        }
      ]
    }
  },
  methods: {

    addIdea (idea) {
      this.ideas.push(idea)
    },

    removeIdea (idea) {
      const ideaIndex = this.ideas.indexOf(idea)
      this.ideas.splice(ideaIndex, 1)
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
  }
</style>
