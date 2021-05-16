<template>
  <div id="vue">
    Hello Vue.js! {{ message }}

    <br>
     {{this.$route.params.data}}  is pass by  router-link

  </div>

</template>

<script type="text/javascript">
export default {
  name: 'HelloVue',
  data () {
    return {
      message: '啦啦啦啦啦'
    }
  }
}
</script>

<style type="text/css">
  #vue{
    color: green;
    font-size: 28px;
  }
</style>
