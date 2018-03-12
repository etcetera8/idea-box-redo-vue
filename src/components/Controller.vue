<template>
  <form>
    <input v-model="ideaTitle" placeholder="Idea Title" type="text" ref="Idea" defaultValue="">
    <input v-model="ideaText" placeholder="Idea body" type="text" ref="details" defaultValue="">
    <button class="add-idea" v-on:click="sendForm()">
      Commit
    </button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      ideaTitle: '',
      ideaText: ''
    }
  },
  methods: {
    sendForm () {
      if (this.ideaTitle.length > 0 && this.ideaText.length > 0) {
        const {ideaTitle, ideaText} = this
        // this.$emit('create-idea', {
        //   titleText,
        //   ideaText
        // })
        const idea = {title: ideaTitle, idea: ideaText, status: 'fresh'}
        this.ideaTitle = ''
        this.ideaText = ''
        this.addIdea(idea)
      }
    }
  },
  props: ['addIdea']
}
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  input, button {
    width: 200px;
    margin: 10px;
  }
</style>
