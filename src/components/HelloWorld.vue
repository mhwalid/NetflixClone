<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Je m'appele Fabien j'ai 27 ans</h2>
    <h2>Je m'appele walid j'ai 22 ans</h2>
    <h2>Je m'appele bilal j'ai 22 ans</h2>
    <h2>Je m'appele basile j'ai 20 ans</h2>
    <button v-on:click="getAllMovies">test</button>
    <p v-for="item in allMovies" :key="item">
    {{item}}
    
    </p>
  </div>
</template>

<script>
import {getSingleMovie, getTwentyPopularMovies} from '../api/apiService.js'
export default {
  name: 'HelloWorld',
   data: function() {
     return {
       allMovies: []
     }
    
  },
  props: {
    msg: String,    
  },
 
  methods: {
    getOneMovie(id){
      getSingleMovie(id).then(response => {
        console.log(response)
      })
    },
    getAllMovies(){
      
      for(let i=1; i<10; i++){
        getTwentyPopularMovies(i).then((response) => {
          
          this.allMovies =this.allMovies.concat(response.results) 
          console.log(this.allMovies)
        })
        
      }
     
      
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
