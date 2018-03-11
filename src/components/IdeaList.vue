<template>
  <div>
    <section v-for="idea in ideas">
      <div class="content">
        <span class="delete-btn" v-on:click="removeIdea(idea)"><i class="far fa-trash-alt"></i></span>
        <h3>{{idea.title}}</h3>
        <p>{{idea.idea}}</p>
      </div>
    </section>
  </div>
</template>

<script type = "text/javascript" >
  export default {
    props: ['ideas'],
  
    methods: {
      removeIdea(idea){
        this.$emit('remove-idea', idea)
      }
    }
  };
</script>

<style>
  section {
    background: rgba( 20, 20, 155, 0.4);
    color: white;
    height: 150px;
    width:300px;
    margin: 25px auto;
    text-align: center;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-align: center;
  }

  h3 {
  }

  .delete-btn {
    float: right;
    margin: 10px;
  }
</style>