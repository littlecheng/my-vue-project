<template>
  <div>
    <v-header></v-header>

    <div>
      <div style="height:900px;width:100%;">權限管理</div>
    </div>

     <v-footer>
       <template v-slot:footer></template>
     </v-footer>
  </div>
</template>

<script>
  import header from '@/components/day03/header';
  import Footer from '@/components/day03/footer'
export default {
     components:{
      'v-header': header ,
      "v-footer": Footer
    }
}
</script>