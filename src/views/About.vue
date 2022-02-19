<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
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