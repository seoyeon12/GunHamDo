<template>
  <div id="app">
    <zero v-bind:propsStorys="storys[0]" class="section"></zero>
    <one v-bind:propsStorys="storys[1]" class="section"></one>
    <two v-bind:propsStorys="storys[2]" class="section"></two>
    <three v-bind:propsStorys="storys[3]" class="section"></three>
    <four v-bind:propsStorys="storys[4]" class="section"></four>
    <five v-bind:propsStorys="storys[5]" class="section"></five>
  </div>
</template>

<script>
import zero from './components/Zero'
import one from './components/One'
import two from './components/Two'
import three from './components/Three'
import four from './components/Four'
import five  from './components/Five'

export default {
  name: 'App',
  data() { 
    return { 
      storys: []
    };
  },
  created() { 
    this.$http.get("/storys").then(response => { 
      this.storys = response.data;
    });
  }, 
  components: {
    zero,
    one,
    two,
    three,
    four,
    five
  },
}


</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app div {
  width: 100%;
  height: 100vh;
  transition: all 1s;
  overflow: hidden;
  font-family: 'Do Hyeon', sans-serif;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
}
@-o-keyframes fadein { /* Opera */
  from {
    opacity:0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@-webkit-keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@-o-keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
