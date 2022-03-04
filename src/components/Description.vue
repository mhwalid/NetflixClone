<template>
  <div class="desc">
    <h2 id="title">{{title}}</h2>
    <img :src="'https://image.tmdb.org/t/p/original/'+ImgPath" alt="profile" style="    height: 315px; width: 400px;">
    <h3>Synopsis</h3>
    <p id="desc">{{description}}</p>
    
  </div>
</template>

<script>
import axios from 'axios';
export default {
   data: function() {
     return {
        mes:"where are the one",
        id:this.$route.params.movieId,
        description:"",
        ImgPath:"",
        title:"",
     }
    
  },

  
     mounted () {
    axios
      .get('https://api.themoviedb.org/3/movie/'+this.id+'?api_key=e023efc4d49d5c1c3a00c0b9db3c2ece&language=en-US')
      .then(response => (
          // console.log(response),
        this.description = response.data.overview,
        this.ImgPath = response.data.poster_path,
        this.title = response.data.original_title
        ))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
  color:white;
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

.desc {
  display:flex;
  flex-direction: column;
  align-items: center;
}

.desc #desc {  
  width: 50%;
  text-align: justify;
}

#title {
  margin-top : 40px;
  margin-bottom: 40px;
}



</style>
