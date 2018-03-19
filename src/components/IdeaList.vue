<template>
  <div>
    <section v-for="idea in ideas">
      <card v-bind="{idea, removeIdea, upvote, downvote}"/>
    </section>
  </div>
</template>

<script type = "text/javascript" >
  import Card from '@/components/card'
  export default {
    name: 'IdeaList',
    components: {
      'card': Card
    },
    props: ['ideas'],

    methods: {
      removeIdea (idea) {
        this.$emit('remove-idea', idea)
      },

      upvote(idea) {
        switch (idea.status) {
          case 'fresh':
            idea.status = 'working'
            break;
          case 'working':
            idea.status = 'stale'
        }
      },

      downvote(idea) {
        switch (idea.status) {
          case 'stale':
            idea.status = 'working'
            break;
          case 'working':
            idea.status = 'fresh'
        }
      }
    }
  }
</script>

<style>
  section {
    background: rgba( 20, 20, 155, 0.4);
    color: white;
    height: 170px;
    width:300px;
    margin: 25px auto;
    padding: 5px;
    text-align: left;
    border-radius: 15px;
    position: relative;
  }

  .vote {
    margin-left: 15px;
    transition: color .5s;
  }

  .voters {
    display: flex;
    flex-direction: column;
  }

  .fingers {
    margin-left: 34px;
  }

  .status {
    float: left;
    clear: both;
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
