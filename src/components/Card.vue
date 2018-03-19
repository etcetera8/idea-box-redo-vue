<template>
  <div>
    <span class="delete-btn" v-on:click="removeIdea(idea)"><i class="far fa-trash-alt"></i></span>
    <div class="content">
      <h3>Title: {{idea.title}}</h3>
      <p><span class="label">Main:</span> {{idea.idea}}</p>
      <div class="voters">
        <span class="status">Status: {{idea.status}}</span>
        <div class="fingers">
          <span v-on:click="upvote(idea)" class="vote"><i class="far fa-hand-point-up"></i></span>
          <span v-on:click="downvote(idea)" class="vote"><i class="far fa-hand-point-down"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['idea', 'removeIdea', 'upvote', 'downvote']
  
}
</script>

<style>

</style>


