<template>
  <div class="center">
    <form
      @submit="checkForm"
      method="post"
      >

      <p v-if="errors.length" class="alert">
        <b>Wait! Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </p>

      <label for="name">{{text.name}}</label>
      <input
        class="size-inputs"
        id="name"
        v-model="name"
        type="text"
        name="name"
      >

      <label for="email">{{ text.email }}</label>
      <input
        class="size-inputs"
        id="email"
        v-model="email"
        type="text"
        name="email"
      >

      <label for="phoneNumber">{{ text.phone }}</label>
      <input
        class="size-inputs"
        id="phone"
        v-model="phone"
        type="integer"
        name="phone"
      >

      <label for="message">{{ text.message }}</label>
      <textarea
        id="message"
        v-model="message"
        type="text"
        name="message"
      />

      <input
        type="submit"
        value="Say Hi!"
      >

    </form>
  </div>
</template>

<script>
import axios from 'axios'
import english from '../languages/english'
import korean from '../languages/korean'

export default {
  data: function () {
    return {
      errors: [],
    }
  },

  props: [
    'text'
  ],

  created() {
    if(this.$store.state.language == 'korean') {
      this.text = {
        name: korean.contactName,
        email: korean.contactEmail,
        phone: korean.contactPhone,
        message: korean.contactMessage,
      }
    }
    else{
      this.text = {
        name: english.contactName,
        email: english.contactEmail,
        phone: english.contactPhone,
        message: english.contactMessage,
      }
    }
  },

  methods: {
    clearInputFields: function() {
      this.text.name = ''
      this.text.email = ''
      this.text.phone = ''
      this.text.message = ''
    },
    checkForm: function(e) {
      e.preventDefault()

      this.errors = []

      if(!this.name) {
        this.errors.push('Please let me know what your name is!')
      }

      if(!this.email){
        this.errors.push('Please enter in your email.')
      }

      if(!this.message) {
        this.errors.push('Please leave a message.')
      }
      else {
        axios.post(process.env.VUE_APP_apiBaseUrl + '/message', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message,
        })
        .then((response) => {
          if(response.data === "OK") {
            alert("Message sent. Thanks, and talk to you soon!")
            this.clearInputFields()
          }
          else {
            alert("Error: " + response.data)
          }
        })
        .catch((error) => alert(error))
      }
    }
  } 

}
</script>

<style lang="scss">

  form {
    display: flex;
    flex-direction: column;
    width: 100%
  }

  label {
    margin-top: 2em;
    margin-bottom: 1em;
    font-size: 1.2em;
    font-weight: 500;
    // color: #94aab0;
  }

  input, textarea {
    margin-bottom: 1em;
    border: 1px solid #cfd9db;
    border-radius: 0.25em;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
  }

  input[type="submit"] {
    width: 20%;
    padding: 1em;
    margin-top: 3em;
    color: white;
    letter-spacing: 2px;
    transition: .2s all ease-in-out;
    border-bottom: 2px solid transparent;
    background-color: rgba(66, 185, 131, .8);
    -webkit-appearance: none;
  }

  input[type="submit"]:hover {
    color: #222;
	}

  .size-inputs, textarea {
    width: 75%;
    padding: 12px;
    background-color: #ffffff;
  }

  textarea {
    height: 6em;
  }

  .center {
    display: flex;
    justify-content: center;
  }

  .alert {
    color: red;
  }
</style>