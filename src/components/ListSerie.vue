<template>
  <div class="hello">
    <section class="main-container" >
      <div v-for="genre in this.allGenres" :key="genre.id" class="location" id="home">
        <h1>{{ genre.name }}</h1>
        <div class="box">
          <div v-for="film in this.orderMovies[genre.name]" :key="film.id">
            <router-link :to="'/description/'+film.id"  ><img v-bind:src="'https://image.tmdb.org/t/p/w300/' + film.poster_path" alt=""></router-link>
            <a href=""><img v-bind:src="'https://image.tmdb.org/t/p/w300/' + film.poster_path" alt=""></a>
            <p>{{ film.original_title }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {getTwentyPopularMovies} from '../api/apiService.js'
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      allMovies: [],
      allGenres: [
        {"id":28,"name":"Action"},
        {"id":12,"name":"Adventure"},
        {"id":16,"name":"Animation"},
        {"id":35,"name":"Comedy"},
        {"id":80,"name":"Crime"},
        {"id":99,"name":"Documentary"},
        {"id":18,"name":"Drama"},
        {"id":10751,"name":"Family"},
        {"id":14,"name":"Fantasy"},
        {"id":36,"name":"History"},
        {"id":27,"name":"Horror"},
        {"id":10402,"name":"Music"},
        {"id":9648,"name":"Mystery"},
        {"id":10749,"name":"Romance"},
        {"id":878,"name":"Science Fiction"},
        {"id":10770,"name":"TV Movie"},
        {"id":53,"name":"Thriller"},
        {"id":10752,"name":"War"},
        {"id":37,"name":"Western"}
      ],
      orderMovies: [],
    }
  },
  props: {
    msg: String,
  },
  methods: {
    getAllMovies(){
      this.fillOrderMoviesIndex()
      const nbIteration = 20;
      for (let i = 1; i < nbIteration; i++) {
        getTwentyPopularMovies(i).then((response) => {
          this.allMovies = this.allMovies.concat(response.results)
          if (this.allMovies.length >= (nbIteration -1) * 20){
            this.orderMoviesByGenre();
          }
        })
      }
    },
    /**
     * Pour toutes les films on compare la liste des genres dans lesquels il peut apparaitre
     * Si oui alors on l'ajoute a notre tableau des genres avec comme index le genre name.
     * On limite le nombre de film par genre pour eviter d'avoir trop de film dans un genre
     */
    orderMoviesByGenre() {
      for (const movie of this.allMovies) {
        for (const genre of this.allGenres) {
          for (const genreMovie of movie.genre_ids) {
            if (genreMovie === genre.id){
              // Limitation a 20 film par genre
              if (this.orderMovies[genre.name].length <= 20) {
                this.orderMovies[genre.name].push(movie);
              }
            }
          }
        }
      }
    },
    fillOrderMoviesIndex() {
      for (const genre of this.allGenres) {
        this.orderMovies[genre.name] = [];
      }
    }
  },
  mounted: function() {
    this.getAllMovies()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


img {
  max-width: 100%;
}

h1 {
  font-size: 40px;
}

/* MAIN CONTIANER */
.main-container {
  padding: 50px;
}

.box {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(6, minmax(100px, 1fr));
  color: white;
}

.box a {
  transition: transform .3s;
}

.box a:hover {
  transition: transform .3s;
  -ms-transform: scale(1.4);
  -webkit-transform: scale(1.4);
  transform: scale(1.4);
}

.box img {
  border-radius: 2px;
}

/* LINKS */
.link {
  padding: 50px;
}

.sub-links ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
}

.sub-links a {
  text-decoration: none;
}

.sub-links a:hover {
  text-decoration: underline;
}

.logos a{
  padding: 10px;
}

.logo {
  color: var(--dark);
}

/* MEDIA QUERIES */

@media(max-width: 900px) {

  header {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
    "nt nt nt  .  .  . sb . . . "
    "mn mn mn mn mn mn  mn mn mn mn";
  }

  .box {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

}

@media(max-width: 700px) {

  .box {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  .sub-links ul {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }

}

@media(max-width: 500px) {

  .wrapper {
    font-size: 15px;
  }


  .netflixLogo {
    max-width: 100%;
    margin: auto;
    padding-right: 20px;
  }

  .main-nav {
    display: grid;
    grid-gap: 0px;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }

  h1 {
    text-align: center;
    font-size: 18px;
  }

  .box {
    display: flex;
    grid-gap: 20px;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }

  .box a:hover {
    transition: transform .3s;
    -ms-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1.2);
  }

  .logos {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
  }

  .sub-links ul {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
    font-size: 15px;
  }
}
</style>
