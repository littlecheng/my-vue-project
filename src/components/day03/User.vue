<template>
  <div>

      <v-header>

      </v-header>

      <div>
        <div style="height:900px;width:100%;">
          用戶管理
        </div>
        
      </div>


    <v-footer>
       <template v-slot:footer></template>
     </v-footer>
  </div>
</template>
<script>
  import $ from 'jquery';
  import header from '@/components/day03/header';
  import Footer from '@/components/day03/footer'
  export default {
    components:{
      'v-header': header ,
         "v-footer": Footer
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key,keyPath);
      }
    }
  }
</script>

<style>
</style>