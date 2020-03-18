<template>
  <div class="about">
    <h1>Hello.
      <span class="wiggle">
        👋
      </span>
    </h1>

    <h2>
      My name is Gina Shin.
    </h2>

    <p>
      I am a fullstack developer who loves to work in Node and Vue, and has extensive SQL experience.
    </p>

    <p>  
      I am passionate about problem-solving and great user-experiences in building modern applications.
      You'll see some of that on my
      <a href="https://github.com/gina-shin">GitHub</a> and on my
      <a href="" @click.prevent="downloadResume()">resume</a>.
      If you would like to chat over some coffee or get in touch with me, feel free to drop me a line <router-link to="/contact">here</router-link>.
    </p>

    <p>
      I'm also a joyful leader and positivity electrode who has a deep compassion for people.
    </p>

    <p>
      Outside of programming, I love to clicker train my cat to sit for the 50,000th time.
    </p>
  </div>
</template>

<script>
// Do I import my language files here? Or in State store and try to retrieve them after testing state.store's settings?
// import english from '../languages/english'
// import korean from '../languages/korean'

export default {
  // data: function() {
  //   // if() {

  //   // }
  //   return {

  //   }
  // },

  methods: {
    downloadResume: function() {
      window.open('https://ginaleeshin.com/assets/resumeShinGina.pdf', '_blank')
    }
  }
}
</script>

<style lang="scss">

  h1 {
    font-size: 5em;
    font-weight: 500;
  }

  h2 {
    font-size: 2em;
  }

  p {
    font-family: Roboto;
    font-size: 1.5em;
    font-weight: 300;
  }

  .wiggle {
    display: inline-block;
    animation: wiggle 2s infinite;
  }

  @keyframes wiggle {
    0% { transform: rotate(0deg); }
    80% { transform: rotate(0deg); }
    85% { transform: rotate(5deg); }
    95% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
  }

  .about {
    width: 80%;
    display: flex;
    flex-direction: column;
  }

</style>
