<template>
  <div class="hello">
    <img :src="'https://image.tmdb.org/t/p/original/'+ImgPath" alt="profile" style="    height: 315px; width: 400px;">
      <h2>{{titel}}</h2>
    <p>{{description}}</p>
    
  </div>
</template>

<script>
import {getSingleMovie} from "@/api/apiService";
export default {
   data: function() {
     return {
        mes:"where are the one",
        id:this.$route.params.movieId,
        description:"",
        ImgPath:"",
        titel:"",
     }
    
  },
     mounted () {
       getSingleMovie(this.id).then((response) => {
             this.description = response.data.overview
             this.ImgPath = response.data.poster_path
             this.titel = response.data.original_title
       })
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
  h1,h2,p{
    color: white;
  }

</style>
