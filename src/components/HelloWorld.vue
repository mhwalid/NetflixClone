<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Je m'appele Fabien j'ai 27 ans</h2>
    <h2>Je m'appele walid j'ai 22 ans</h2>
    <h2>Je m'appele bilal j'ai 22 ans</h2>
    <h2>Je m'appele basile j'ai 20 ans</h2>
    <button v-on:click="getPopularMovies">test</button>
  </div>
</template>

<script>
import {getPopularMovies} from '../api/apiService.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
    
  },
  methods: {
    getPopularMovies(){
      getPopularMovies().then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
