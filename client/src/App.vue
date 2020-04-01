<template>
  <div id="app">
    <div class="header">
      <div id="nav">
        <router-link to="/">About</router-link> |
        <router-link to="/contact">Contact Me</router-link>
      </div>
      <div id="language">
        Talk to me in
        <a href="" @click.prevent="changeLanguage('korean')">한글</a> |
        <a href="" @click.prevent="changeLanguage('english')">English</a>
      </div>
    </div>
    <router-view :text="text"/>
  </div>
</template>

<script>
import store from './store/index.js'
import english from './languages/english'
import korean from './languages/korean'

export default {
  data: function(){
    return {
      text: ''
    }
  },

  // props: [
  //   'text',
  // ],

  methods: {
    changeLanguage(language) {
      store.dispatch('changeLanguage', language)
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
        // return text
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
        // return text
      }
    }
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Roboto|Rubik&display=swap');

#app {
  font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: calc(10px + 0.33vw);
  -webkit-font-smoothing: antialiased;
  padding: 5vh 10vw;
  color: #121314;
}

#nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.header {
  padding-bottom: 30px;
  font-family: Roboto;
  font-weight: bold;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
}

</style>
