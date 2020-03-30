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
// Need to make this a computed value? Currently doesn't responsively reload props when changing state store
// import store from '../store/index.js'
import english from '../languages/english'
import korean from '../languages/korean'

export default {
  /* eslint-disable */
  data: function() {
    return {
      text: ''
    }
  },

  created() {
    if(this.$store.state.language == 'korean') {
      this.text = {
        hello: korean.hello,
        intro: korean.intro,
        career: korean.career,
        interests: korean.interests,
        github: korean.github,
        githubLink: korean.githubLink,
        resume: korean.resume,
        resumeLink: korean.resumeLink,
        contact: korean.contact,
        contactLink: korean.contactLink,
        also: korean.also,
        hobbies: korean.hobbies,
      }
    }
      else{
        this.text = {
          hello: english.hello,
          intro: english.intro,
          career: english.career,
          interests: english.interests,
          github: english.github,
          githubLink: english.githubLink,
          resume: english.resume,
          resumeLink: english.resumeLink,
          contact: english.contact,
          contactLink: english.contactLink,
          also: english.also,
          hobbies: english.hobbies,
        }
      }
  },

  methods: {
    downloadResume: function() {
      window.open('https://ginaleeshin.com/resumeShinGina.pdf', '_blank')
    },

    getLanguage() {
      return this.$store.state.language
    },
  },

/* eslint-disable */
    // getLanguage() {
    //   return this.$store.getters.language
    // },

  //   setText() {
  //     console.log("getters", this.getLanguage())
  //     var aboutText = (this.getLanguage() == 'korean')
  //     ? {
  //       hello: korean.hello,
  //       intro: korean.intro,
  //       career: korean.career,
  //       interests: korean.interests,
  //       github: korean.github,
  //       githubLink: korean.githubLink,
  //       resume: korean.resume,
  //       resumeLink: korean.resumeLink,
  //       contact: korean.contact,
  //       contactLink: korean.contactLink,
  //       also: korean.also,
  //       hobbies: korean.hobbies,
  //     }
  //     : {
  //       hello: english.hello,
  //       intro: english.intro,
  //       career: english.career,
  //       interests: english.interests,
  //       github: english.github,
  //       githubLink: english.githubLink,
  //       resume: english.resume,
  //       resumeLink: english.resumeLink,
  //       contact: english.contact,
  //       contactLink: english.contactLink,
  //       also: english.also,
  //       hobbies: english.hobbies,
  //     }
  //     return this.text = aboutText
  //   }
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
