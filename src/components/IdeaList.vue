<template>
  <div>
    <section v-for="idea in ideas">
      <span class="delete-btn" v-on:click="removeIdea(idea)"><i class="far fa-trash-alt"></i></span>
      <div class="content">
        <h3>Title: {{idea.title}}</h3>
        <p><span class="label">Main:</span> {{idea.idea}}</p>
        <span>Status: {{idea.status}}</span>
        <span class="vote"><i class="far fa-hand-point-up"></i></span>
        <span class="vote"><i class="far fa-hand-point-down"></i></span>
      </div>
    </section>
  </div>
</template>

<script type = "text/javascript" >
export default {
  props: ['ideas'],

  methods: {
    removeIdea (idea) {
      this.$emit('remove-idea', idea)
    }
  }
}
</script>

<style>
  section {
    background: rgba( 20, 20, 155, 0.4);
    color: white;
    height: 150px;
    width:300px;
    margin: 25px auto;
    padding: 5px;
    text-align: left;
    border-radius: 15px;
  }

  .vote {
    margin-left: 5px;
    transition: color .5s;
  }

  .vote:hover {
    color: #48A49C;
  }

  .content {
    padding: 15px 15px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-align: center;
  }

  h3 {
    margin: 25px 0;
    padding: 10px 0;
    border-bottom: 1px solid white;
    width:90%;
  }

  .label {
    font-weight: bold;
  }

  p {
    border-bottom: 1px solid white;
    width: 90%;
  }

  .delete-btn {
    float: right;
    margin: 10px;
    transition: color .5s;
  }

  .delete-btn:hover {
    color: rgb(255, 0, 0);
  }
</style>
