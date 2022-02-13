<template>
  <div class="hello">
    <img :src="'https://image.tmdb.org/t/p/original/'+ImgPath" alt="profile" style="    height: 315px; width: 400px;">
      <h2>{{titel}}</h2>
    <p>{{description}}</p>
    
    <button @click="getSingleMovie(5)">one Movie</button>
    <button @click="toggle">one </button>
    <!-- <h1>{{id}} the description  the image {{ImgPath}} the titel </h1> -->
    
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
        titel:"",
     }
    
  },

   methods: {

      // setData() {
          // var resulta= this.getSingleMovie(this.id);

           
          //  console.log(resulta);
            // this.description=Sdescription;
            // this.ImgPath=Simag;
            // this.titel=Stitle;
    // },
      // getSingleMovie  (id):functi  {
      //   let response = await fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=e023efc4d49d5c1c3a00c0b9db3c2ece&language=en-US', {
      //       method : 'GET',
      //       headers : {
      //           'Accept': 'application/json',
      //           'content-type': 'application/json'
      //       }
      //   }).then(response => { 
      //     console.log(response);
      //     this.ImgPath = response.data; 
      //     this.ImgPath = "csq"; })
        
      //     // console.log(response+"zzzzzzz");
      //   let popularMovies = await response.json();
      //   console.log(popularMovies+"aaaaaaaa");
      //   return popularMovies;
      //   // if(popularMovies.adult==false){
      //   //     console.log('done');
            
      //   //     // this.setData(popularMovies.overview,popularMovies.poster_path,popularMovies.original_title)
      //   // }else{
      //   //   console.log("failed");
      //   // }
      //   // return popularMovies;
        
      // }
   },
     mounted () {
    axios
      .get('https://api.themoviedb.org/3/movie/'+this.id+'?api_key=e023efc4d49d5c1c3a00c0b9db3c2ece&language=en-US')
      .then(response => (
          console.log(response),
        this.description = response.data.overview,
        this.ImgPath = response.data.poster_path,
        this.titel = response.data.original_title
        ))
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
