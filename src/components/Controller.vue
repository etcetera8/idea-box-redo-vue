<template>
  <form>
    <label>Idea</label>
    <input v-model="ideaTitle" type="text" ref="Idea" defaultValue="">
    <label>Details</label>
    <input v-model="ideaText" type="text" ref="details" defaultValue="">
    <button class="add-idea" v-on:click="sendForm()">
      Commit
    </button>
  </form>
</template>

<script>
export default {
  data(){
    return {
      ideaTitle: '',
      ideaText: ''
    }
  },
  methods: {
    sendForm(){
      if (this.ideaTitle.length > 0 && this.ideaText.length > 0) {
        const {ideaTitle, ideaText} = this
        // this.$emit('create-idea', {
        //   titleText,
        //   ideaText
        // })
        const idea = {title: ideaTitle, idea: ideaText}
        console.log(idea);
        
        this.addIdea(idea)
      }
    }
  },
  props: ["addIdea"]
}
</script>