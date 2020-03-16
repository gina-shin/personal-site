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

      <label for="name">Name</label>
      <input
        class="size-inputs"
        id="name"
        v-model="name"
        type="text"
        name="name"
      >

      <label for="email">Email</label>
      <input
        class="size-inputs"
        id="email"
        v-model="email"
        type="text"
        name="email"
      >

      <label for="phoneNumber">Phone Number</label>
      <input
        class="size-inputs"
        id="phone"
        v-model="phone"
        type="integer"
        name="phone"
      >

      <label for="message">Message</label>
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

export default {
  data: function () {
    return {
      errors: [],
      name: null,
      email: null,
      phone: null,
      message: null,
    }
  },
  methods: {
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
        console.log('DEBUG PROCESS.ENV.APIBASEURL', process.env.VUE_APP_apiBaseUrl)
        axios.post(process.env.VUE_APP_apiBaseUrl + '/message', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message,
        })
        .then((response) => console.log("DEBUG RESPONSE", response))
        .catch((error) => console.log(error))
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