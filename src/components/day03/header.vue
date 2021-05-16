<template>
  <div>

    <slot name="header">
        <el-menu :default-active="this.$route.path"  class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b" router>
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          {{ item.navItem }}
        </el-menu-item>
        </el-menu>

    <el-header style="text-align: right; font-size: 12px;color:white">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px;"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{$store.getters.getUser.name}}</span>
    </el-header>

    </slot>
  </div>
</template>
<script>
//引入jquery就可以使用了
import $ from 'jquery'

  export default {
    name: 'v-header',
    data() {
      return {
        activeIndex2: 1,
        navList:[
          {
            name:"/day03/handlercenter",
            navItem:'處理中心'
          },
           {
            name:"/day03/workbench",
            navItem:'我的工作台'
          },
          {
            name: '/day03/ServiceHall',
            navItem:'服务大厅'
          },
  			  {
            name:'/day03/Management',
            navItem:'权限管理'
          },
  			  {
            name:'/day03/User',
            navItem:'用户管理'
          },
  		    {
            name:'/day03/Personnel',
            navItem:'人员数据'
          },
  			  {
            name:'/day03/Alarm',
            navItem:'报警中心'
          },
          {
            name:'/',
            navItem:'返回首页'
          }
        ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
          console.log(key, keyPath);
      }
    }

  }
</script>

<style scoped>
  .el-header{
    position: absolute;
    top: 0;
    right: 0;
    line-height: 60px;

  }

  .el-dropdown{
    color:white
  }

</style>
