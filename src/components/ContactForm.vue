

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

            <h1>Nous contacter </h1>

            <p>
                <label for="name">Nom</label>
                <input id="name" v-model="name" placeholder="Votre nom" type="text" name="name">
            </p>

            <p>
                <label for="firstName">Prénom</label>
                <input id="firstName" v-model="firstName" placeholder="Votre prénom" type="text" name="firstName">
            </p>

            <p>
                <label for="mail">Mail</label>
                <input id="mail" v-model="mail" placeholder="Votre adresse mail" type="email" name="mail">
            </p>

           

            <p>
                <label for="Message">Message</label>
                <textarea id="Message" v-model="message" type="text" placeholder="Votre message..." name="Message">
                </textarea>
            </p>
            <p>
                <input id="btnSubmit" type="submit" value="Envoyer">
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
        mail : '',
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
                    mail : this.mail
                    
                }
                console.log(newObj)
                const notyf = new Notyf();
                notyf.success('Merci '+ newObj.name + ' ' +newObj.firstName + ' pour votre message !');
                this.name ="";
                this.firstName ="";
                this.message="";
                this.mail="";
            }

            e.preventDefault();
        }
}
}
</script>