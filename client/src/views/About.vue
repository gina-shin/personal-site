<template>
  <div class="about">
    <h1>{{ text.hello }}
      <span class="wiggle">
        👋
      </span>
    </h1>

    <h2>
      {{ text.intro }}
    </h2>

    <p>
      {{ text.career }}
    </p>

    <p>  
      {{ text.interests }}
      {{ text.github }}
      <a href="https://github.com/gina-shin">{{ text.githubLink }}</a>
      {{ text.resume }} <a href="" @click.prevent="downloadResume()">{{ text.resumeLink }}</a>.
      {{ text.contact }} <router-link to="/contact">{{text.contactLink }}</router-link>.
    </p>

    <p>
      {{ text.also }}
    </p>

    <p>
      {{ text.hobbies }}
    </p>
  </div>
</template>

<script>
import text from '../languages/index';

export default {
  props: [
    'text'
  ],

  // data: function() {
  //   return {
  //     text: ''
  //   }
  // },

  created() {
	this.text = text[this.$store.getters.getLanguage][this.$route.name];
  },

  methods: {
    downloadResume: function() {
      window.open('https://ginaleeshin.com/resumeShinGina.pdf', '_blank')
    },
  }
}
/* eslint-enable */
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
