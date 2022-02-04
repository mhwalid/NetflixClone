<template>
  <div class="contact">
    <form
            @submit="checkForm"
            method="post"
        >

            <p v-if="errors.length">
                <b style="color: red">Please correct the following error(s):</b>
                <ul>
                    <li style="color: red" v-for="error in errors" v-bind:key="error">{{ error }}</li>
                </ul>
            </p>

            <p>
                <label for="name">Nom</label>
                <input id="name" v-model="name" type="text" name="name">
            </p>

            <p>
                <label for="firstName">Prénom</label>
                <input id="firstName" v-model="firstName" type="text" name="firstName">
            </p>

           

            <p>
                <label for="Message">Message</label>
                <input id="Message" v-model="message" type="text" name="Message">
            </p>
            <p>
                <input type="submit" value="Submit">
            </p>

        </form>
    
    
  </div>
</template>
<script>
export default {
  name: 'ContactForm',
     data: function() {
     return {
       errors: [],
        name: '',
        firstName: '',
        message: '',
     }
    
  },
     methods: {
        checkForm: function (e) {
            this.errors = [];

            if (!this.name) {
                this.errors.push("Name required.");
            }
            if (!this.firstName) {
                this.errors.push('firstName required.');
            }

            if (!this.errors.length) {
                const newObj = {
                    name : this.name,
                    firstName : this.firstName,
                    message : this.message,
                    
                }
                console.log(newObj)
            }

            e.preventDefault();
        }
}
}
</script>