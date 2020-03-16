<template>
  <div id="app">
    <div class="header">
      <div id="nav">
        <router-link to="/">About</router-link> |
        <router-link to="/contact">Contact Me</router-link>
      </div>
      <div id="language">
        Talk to me in
        <router-link to="/">한글</router-link> |
        <router-link to="/">English</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

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
