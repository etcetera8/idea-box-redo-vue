<template>
  <div>
    <section v-for="idea in ideas">
      <div class="content">
        <h4>{{idea.title}}</h4>
        <p>{{idea.idea}}</p>
      </div>
    </section>
  </div>
</template>

<script type = "text/javascript" >

export default {
  props: ['ideas'],
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
</style>