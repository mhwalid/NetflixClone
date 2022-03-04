<template>
  
  <Navbar />
  <ContactForm />
  <Footer />
</template>
<script>

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar.vue'
import ContactForm from'@/components/ContactForm.vue'
export default {
  name: 'About',
  components: {
    Navbar,
    Footer,
    ContactForm,
  }
}
</script>


<style>

h1 {
  color:white;
}
label {
  color:white;
  margin : 10px;
}

.contact {
  display:flex;
  justify-content: center;
  align-items: center;
}

.contact p {
  display:flex;
  flex-direction: column;
  align-items: center;
}

#btnSubmit {
  padding: 6px 10px;
  background-color: red;
  border: none;
  border-radius: 15px;
  color:white;
}




</style>