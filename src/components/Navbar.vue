<template>
    <header>
      <div class="netflixLogo">
        <a id="logo" href="#home"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" alt="Logo Image"></a>
      </div>      
      <nav class="main-nav">                
        <router-link to="/">Accueil</router-link>
        <a href="#movies">Films</a>
        <a href="#originals">Séries</a>
        <a href="#">Récemment ajouté</a>        
      </nav>   
    </header>
</template>

<script>
export default {
    name : "Navbar",

}
</script>

<style>

a {
    text-decoration: none;
    color: white;
}

nav {
    background-color:black;
}
</style>