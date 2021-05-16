
<template>
  <div>
    <v-header>
        <template v-slot:header></template>
    </v-header>

      <div>
        <div style="height:900px;width:100%;">
           服務大廳
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
    name: 'serviceHall',
    data() {
      return {
        activeIndex2: '1',
        navList:[
          {
            name:"/day03/handlercenter",
            navItem:'處理中心'
          },
           {
            name:"/day03/workbench",
            navItem:'我的工作台'
          }, {
            name: '/day03/ServiceHall',
            navItem:'服务大厅'
          }, 
  			  {name:'/day03/Management',navItem:'权限管理'},
  			  {name:'/day03/User',navItem:'用户管理'}, 
  		    {name:'/day03/Personnel',navItem:'人员数据'}, 
  			  {name:'/day03/Alarm',navItem:'报警中心'}
        ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key);
         console.log(keyPath);
    
      }
    }
  }
</script>

<style>
</style>