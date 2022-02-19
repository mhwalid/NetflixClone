

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
                <textarea id="Message" v-model="message" type="text" name="Message">
                </textarea>
            </p>
            <p>
                <input type="submit" value="Submit">
            </p>

        </form>
    
    
  </div>
</template>
<script>
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; 


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
                const notyf = new Notyf();
                notyf.success('Merci '+ newObj.name + ' ' +newObj.firstName + ' pour votre message !');
                this.name ="";
                this.firstName =""
                this.message=""
            }

            e.preventDefault();
        }
}
}
</script>