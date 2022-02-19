<template>
    <header>
      <nav class="main-nav container-fluid">
        <a id="logo" href="#home"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" alt="Logo Image"></a>                  
        <router-link to="/">Accueil</router-link>
        <a href="#movies">Films</a>
        <a href="#originals">Séries</a>
        <a href="#">Récemment ajouté</a> 
        <router-link to="/about">About</router-link>       
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
    margin : 15px;
    padding: 25px;
    font-weight: bolder;
}

nav {
    background-color:black;
    width: 100%;
    padding: 15px;
}
</style>