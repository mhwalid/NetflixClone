<template>
   <Navbar/> 
   <div>
        <Description/>
    </div>
  <!-- </navbar> -->
</template>

<script>
import Description from '@/components/Description';
import Navbar from '@/components/Navbar.vue'

export default {
  // name: 'Description',
  components: {
    Navbar,
    Description,
  }
}

</script>
