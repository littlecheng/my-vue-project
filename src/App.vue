<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">  -->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      window.addEventListener('beforeunload',this.saveState);
    },
    methods:{
      saveState(){
        window.sessionStorage.setItem('state',JSON.stringify(this.$store.state));
      }
    }

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 0;
    margin: 0;

  }

  body {
    margin: 0px;
    padding: 0px;
  }
</style>
