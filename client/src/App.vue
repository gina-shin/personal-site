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
import text from './languages/index'

document.title = 'Well, hello!'

export default {
  data: function(){
    return {
      text: ''
    }
  },

  methods: {
    changeLanguage(language) {
		store.dispatch('changeLanguage', language)
		this.text = text[language];
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
