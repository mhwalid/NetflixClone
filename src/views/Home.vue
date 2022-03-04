<template>
  <div class="home">
    <Navbar/>
  </div>
    <ListSerie/>
  <Footer/>
</template>
<script>

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar.vue'
import ListSerie from '@/components/ListSerie.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    ListSerie
  }
}
</script>
<style>

/* CSS VARIABLES */
:root {
  --primary: #141414;
  --light: #F3F3F3;
  --dark: 	#686868;
}

html, body {
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: var(--primary);
  color: var(--light);
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  line-height: 1.4;
}

h1 {
  color: var(--light);
}

</style>
